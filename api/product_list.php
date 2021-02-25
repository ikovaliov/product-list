<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");

    $host = 'mysql';
    $user = 'dbusername';
    $password = 'dbpassword';
    $database = 'dbname';

    $url =  "//{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
    
    function utf8ize($mixed) {
        if (is_array($mixed)) {
            foreach ($mixed as $key => $value) {
                $mixed[$key] = utf8ize($value);
            }
        } else if (is_string ($mixed)) {
            return utf8_encode($mixed);
        }
        return $mixed;
    }

    $con = mysqli_connect($host, $user, $password, $database);

     // get total count of products from db
    $getTotalCountOfProducts = mysqli_query(
        $con,
        "SELECT id, filename, product_name, actual_price, brand_name FROM `product_list`"
    );

    // get current number
    if (isset($_GET['page']) && $_GET['page']!="") {
        $page_no = $_GET['page'];
    } else {
        $page_no = 1;
    }

    // get current order value (ASC|DESC)
    if (isset($_GET['sort']) && $_GET['sort']!="") {
        $sort = "ORDER BY actual_price ".$_GET['sort'];
    } else {
        $sort = "";
    }

    // set total records per page value 
    $total_records_per_page = $_GET['per_page'];

    // calculate OFFSET Value and SET other Variables
    $offset = ($page_no-1) * $total_records_per_page;
    $previous_page = $page_no - 1;
    $next_page = $page_no + 1;

    // get the Total Number of Pages for Pagination
    $result_count = mysqli_query(
        $con,
        "SELECT COUNT(*) As total_records FROM `product_list`"
    );
    $total_records = mysqli_fetch_array($result_count);
    $total_records = $total_records['total_records'];
    $total_no_of_pages = ceil($total_records / $total_records_per_page);
    $second_last = $total_no_of_pages - 1; // total pages minus 1

    $result = mysqli_query(
        $con,
        "SELECT id, filename, product_name, actual_price, brand_name FROM `product_list` $sort LIMIT $offset, $total_records_per_page"
    );
    
    $items = array();  
    if($con){
        if($result) {
            $i = 0;
             while($row = mysqli_fetch_assoc($result)){
                $items[$i]['id'] = $row['id'];
                $items[$i]['image'] = $row['filename'];
                $items[$i]['name'] = $row['product_name'];  
                $items[$i]['price'] = $row['actual_price'];
                $items[$i]['brand'] = $row['brand_name'];
                $i++;
            }   
            echo json_encode(array('total_count'=>$getTotalCountOfProducts->num_rows, 'items'=>utf8ize($items)));
        }
    } else {
        echo "DB connection failed";
    }

    mysqli_close($con);
?>
<?php require 'includes/header.php'; ?>


<?php //require 'includes/navigation.php'; ?>



<?php require 'includes/left-sidebar.php'; ?>

                
        <div class="mcw clearfix container-fluid">           

            <div class="row">
                <div class="col-md-10 page-content">

                    <div class="col-md-3">
                        <img class="img-responsive wmx100" src="img/denied.png" alt="Page not found">
                    </div>

                    <div class="col-md-9">                                        
                        <div class="forum-title">
                            <h1>Permission denied</h1>
                        </div>
                        <div class="subheading">
                            <h3>you dont have permission to access this resource.</h3>
                        </div>
                        <div class="">
                            <p>Goto <a href="/questions">Home page</a></p>
                        </div>
                        <div class="">
                            <a href="#" data-toggle="modal" data-target="#deniedPermissionModal">Popup message</a>
                        </div>

                    </div>

                </div>
                <?php require 'includes/right-sidebar.php'; ?>
            </div>
                               

                            
<?php require 'includes/footer.php'; ?>                               
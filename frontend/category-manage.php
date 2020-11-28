<?php require 'includes/header.php'; ?>

<?php //require 'includes/navigation.php'; ?>

<?php require 'includes/left-sidebar.php'; ?>

                
        <div class="mcw clearfix container-fluid">           

            <div class="row">
                <div class="col-md-10 page-content">
                    <div class="forum-section-container clearfix">
                        
                        <div class="forum-title">
                            <h3>Manage Category</h3>
                        </div>
                        
                        <div class="tbl-container">
                            <table id="categoryList" class="hover table table-striped table-bordered dt-responsive nowrap">
                                <thead>
                                    <tr>
                                        <!-- <th>ID</th> -->
                                        <th>Category name</th>                                    
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php for ($x = 0; $x <= 100; $x++):?>                           
                                    <tr>
                                       <!--  <td><?php echo $x?></td> -->
                                        <td><?php echo 'Category-'.$x?></td>                              
                                        
                                        <td  align="center">
                                            <a href="#" data-toggle="modal" data-target="#editModal" class="btn btn-primary btn-xs proj-update" data-updateid="">
                                                <span class="glyphicon glyphicon-pencil"></span>
                                            </a>
                                        </td>

                                        <td  align="center">
                                            <a href="#" data-toggle="modal" data-target="#deleteModal" class="btn btn btn-danger btn-xs proj-delete" data-title="Delete">
                                                <span class="glyphicon glyphicon-remove-sign"></span>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php endfor;?>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                <?php require 'includes/right-sidebar.php'; ?>
            </div>
                               
                            
<?php require 'includes/footer.php'; ?>                               
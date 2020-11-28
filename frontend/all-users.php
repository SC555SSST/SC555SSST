<?php require 'includes/header.php'; ?>


<?php //require 'includes/navigation.php'; ?>


<?php require 'includes/left-sidebar.php'; ?>
                
        <div class="mcw clearfix container-fluid">          
            
            <div class="row">                        
                <div class="col-md-10 page-content clearfix">

                    <div class="btn-section-container clearfix">
                        <div class="pull-right">
                            <a href="" class="question-btn">Ask Question</a>
                        </div>
                    </div>

                                                  

                    <div class="forum-section-container clearfix">
                        <div class="forum-title">
                            <div class="pull-right forum-desc">
                                <samll>1,309,625 results</samll>
                            </div>
                            <h3>All Users</h3>
                        </div>
                        
                        <div class="user-profile-items row">                            
                                
                            <?php for ($i=0; $i < 11; $i++): 

                                //$arr = [null,1,2,3,1,2,3,1,2,3];
                                //$arr = [1,2,3,4,5,6,7,8,3];
                            ?>                                    
                            <div class="user-profile-item col-md-6">                                        
                                <div class="row">
                                    <div class="col-md-2">
                                        <a href="#" class="profile-link dropdown-toggle" data-toggle="dropdown">
                                            <img src="img/user-images/user-2.png" class="user-image" alt="User Image">
                                        </a>
                                    </div>
                                    <div class="col-md-10">
                                        <span class="username"><a href="">Alexander Pierce</a></span>
                                        <div class="user-sub-title">Various versions have evolved over the years, sometimes by accident</div>
                                        <div class="user-points-div">
                                            <span class="points">1516 Points</span>                                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php endfor;?>                                                                  
                            
                        </div>
                       
                    </div>

                    <div class="col-sm-12">
                        <div class="pagination-div pull-right clearfix">
                            <ul class="pagination">
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <?php require 'includes/right-sidebar.php'; ?>
            </div>
                           

                            
<?php require 'includes/footer.php'; ?>
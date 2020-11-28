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
                            <h3>Search results</h3>
                        </div>
                        
                        <div class="forum-items">    
                            
                            <?php for ($i=0; $i < 10; $i++):
                                $class = ($i%2==0)?'':'active';
                            ?>                             
                            <div class="forum-item <?php echo $class; ?>">
                                <div class="row">
                                    
                                    <div class="col-md-1 forum-info">
                                        <span class="views-number">345</span>
                                        <div>
                                            <small>Answers</small>
                                        </div>
                                    </div>

                                    <div class="col-md-8 no-left-padding">                                        
                                        <a href="forum_post.html" class="forum-item-title">Announcements</a>
                                        <div class="forum-sub-title">New to the community? music, movies, your favorite talk about enythingPlease stop by, say hi and tell us a bit about yourself.</div>
                                        <div class="forum-category"><a href="">Rice</a></div>
                                    </div>
                                    
                                    <div class="col-md-3 forum-item-author">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <a href="#" class="profile-link dropdown-toggle" data-toggle="dropdown">
                                                    <img src="img/user-images/user-2.png" class="user-image" alt="User Image">
                                                </a>
                                            </div>

                                            <div class="col-md-9">
                                                <span class="username"><a href="">John Alex</a></span>
                                                <div class="user-points-div">
                                                    <span class="points">1516 Points</span>                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php endfor ?>

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
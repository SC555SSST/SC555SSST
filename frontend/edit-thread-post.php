<?php require 'includes/header.php'; ?>

<?php //require 'includes/navigation.php'; ?>

<?php require 'includes/left-sidebar.php'; ?>

                
        <div class="mcw clearfix container-fluid">           

            <div class="row">
                <div class="col-md-10 page-content">

                    

                    <div class="forum-section-container clearfix">
                        <div class="forum-title">
                            <h3>Edit thread post</h3>
                        </div> 

                        <div class="question-form row">
                        

                            <form class="ask-question-form col-md-9">
                                <div class="form-group">
                                    <label for="textarea" class="control-label">Answer</label> 
                                    <textarea id="post_text" name="post_text" cols="40" rows="8" class="form-control">Include all the information someone would need to answer your question Include. all the information someone would need to answer your question</textarea>
                                </div>
                                 
                                <div class="form-group">
                                    <button name="submit" type="submit" class="btn btn-primary">Submit</button>
                                    <button name="reset" type="reset" class="btn btn-danger">Reset</button>
                                </div>
                            </form>


                        </div>
                    </div>    








                </div>
                <?php require 'includes/right-sidebar.php'; ?>
            </div>
                               
                            
<?php require 'includes/footer.php'; ?>                               
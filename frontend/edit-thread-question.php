<?php require 'includes/header.php'; ?>

<?php //require 'includes/navigation.php'; ?>

<?php require 'includes/left-sidebar.php'; ?>

                
        <div class="mcw clearfix container-fluid">           

            <div class="row">
                <div class="col-md-10 page-content">

                    

                    <div class="forum-section-container clearfix">
                        <div class="forum-title">
                            <h3>Edit thread question</h3>
                        </div> 

                        <div class="question-form row">
                        

                            <form class="ask-question-form col-md-9">
                                <div class="form-group">
                                    <label for="text" class="control-label">Question Title</label>
                                    <input id="q_title" name="q_title" type="text" class="form-control" value="Thread title">
                                </div>
                                <div class="form-group">
                                    <label for="textarea" class="control-label">Question text</label> 
                                    <textarea id="q_text" name="q_text" cols="40" rows="8" class="form-control">Include all the information someone would need to answer your question Include. all the information someone would need to answer your question</textarea>
                                </div>
                                
                                <!--                                 
                                <div class="form-group">
                                    <label for="select" class="control-label">Category</label> 
                                    <select id="select" name="select" class="select form-control">
                                        <option value="rabbit">Rabbit</option>
                                        <option value="duck">Duck</option>
                                    </select>
                                </div>
                                --> 

                                <div class="form-group">
                                    <label class="control-label" for="checkbox">Categories</label> 
                                    <div class="small-text-label">Select categories which is best suit for your question</div>
                                    <div>
                                        <label class="checkbox-inline">
                                            <input type="checkbox" name="category" checked="checked" value="rabbit">
                                            Rabbit
                                        </label>
                                        <label class="checkbox-inline">
                                            <input type="checkbox" name="category" value="duck">
                                            Duck
                                        </label>
                                        <label class="checkbox-inline">
                                            <input type="checkbox" name="category" value="fish">
                                            Fish
                                        </label>                                        
                                    </div>
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
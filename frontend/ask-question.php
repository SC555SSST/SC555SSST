<?php require 'includes/header.php'; ?>

<?php //require 'includes/navigation.php'; ?>

<?php require 'includes/left-sidebar.php'; ?>

                
        <div class="mcw clearfix container-fluid">           

            <div class="row">
                <div class="col-md-10 page-content">

                    

                    <div class="forum-section-container clearfix">
                        <div class="forum-title">
                            <h3>Ask a question</h3>
                        </div> 

                        <div class="question-form row">
                        

                            <form class="ask-question-form col-md-9">
                                <div class="form-group">
                                    <label for="text" class="control-label">Question Title</label>
                                    <div class="small-text-label">Be specific and imagine you’re asking a question to another person</div>
                                    <input id="q_title" name="q_title" type="text" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="textarea" class="control-label">Question text</label> 
                                    <div class="small-text-label">Include all the information someone would need to answer your question</div>
                                    <textarea id="q_text" name="q_text" cols="40" rows="12" class="form-control"></textarea>
                                </div>
                                
                                <!-- <div class="form-group">
                                    <label for="select" class="control-label">Category</label> 
                                    <div class="small-text-label">Select a category which is best suit for your question</div>
                                    <select id="select" name="select" class="select form-control">
                                        <option value="rabbit">Rabbit</option>
                                        <option value="duck">Duck</option>
                                    </select>
                                </div> --> 



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
<?php require 'includes/header.php'; ?>

<?php //require 'includes/navigation.php'; ?>

<?php require 'includes/left-sidebar.php'; ?>

                
        <div class="mcw clearfix container-fluid">           

            <div class="row">
                <div class="col-md-10 page-content">

                    

                    <div class="forum-section-container clearfix">
                        <div class="forum-title">
                            <h3>Change password</h3>
                        </div> 

                        <div class="question-form row">
                        

                            <form class="change-pw-form col-md-9">
                                <div class="form-group">
                                    <label for="text" class="control-label">Old password</label>
                                    <input id="old_pw" name="old_pw" type="password" class="form-control">
                                    <button type="button" id="" class="toggle"><i id="" class="eyeIcon fa fa-eye"></i></button>
                                </div>
                                <div class="form-group">
                                    <label for="text" class="control-label">New password</label>
                                    <input id="new_pw" name="new_pw" type="password" class="form-control">
                                    <button type="button" id="" class="toggle"><i id="" class="eyeIcon fa fa-eye"></i></button>
                                </div>
                                <div class="form-group">
                                    <label for="text" class="control-label">Confirm new password</label>
                                    <input id="confirm_new_pw" name="confirm_new_pw" type="password" class="form-control">
                                    <button type="button" id="" class="toggle"><i id="" class="eyeIcon fa fa-eye"></i></button>
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
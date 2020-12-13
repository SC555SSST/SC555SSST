<?php require 'includes/header.php'; ?>

<?php //require 'includes/navigation.php'; ?>

<?php require 'includes/left-sidebar.php'; ?>

                
        <div class="mcw clearfix container-fluid">           

            <div class="row">
                <div class="col-md-10 page-content">

                    

                    <div class="forum-section-container clearfix">
                        <div class="forum-title">
                            <h3>Register</h3>
                        </div> 

                        <div class="question-form row">
                        

                            <form class="login-form col-md-9">
                                <div class="form-group">
                                    <label for="text" class="control-label">Full name</label>
                                    <input id="fullname" name="fullname" type="text" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="text" class="control-label">Username</label>
                                    <input id="username" name="username" type="text" class="form-control">
                                </div>

                                <div class="form-group">
                                    <label for="select" class="control-label">Gender</label> 
                                    <select id="gender" name="gender" class="select form-control">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div> 

                                <div class="form-group">
                                    <label for="text" class="control-label">Email</label>
                                    <input id="email" name="email" type="text" class="form-control">
                                </div>

                                <div class="form-group">
                                    <label for="text" class="control-label">password</label>
                                    <input id="password" name="password" type="password" class="form-control">
                                    <button type="button" id="btnToggle" class="toggle"><i id="" class="eyeIcon fa fa-eye"></i></button>
                                </div>

                                <div class="form-group">
                                    <label for="text" class="control-label">confirm password</label>
                                    <input id="confirm_password" name="confirm_password" type="password" class="form-control">
                                    <button type="button" id="btnToggle" class="toggle"><i id="" class="eyeIcon fa fa-eye"></i></button>
                                </div>

                                <div class="form-group">
                                    <label for="radio" class="control-label">User account type</label> 
                                    <div>
                                        <label class="radio-inline">
                                            <input type="radio" name="account_type" value="farmer">
                                            Farmer
                                        </label>
                                        <label class="radio-inline">
                                            <input type="radio" name="account_type" value="expert">
                                            Expert
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
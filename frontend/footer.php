            
            <div class="row">
                <footer class="footer-section">
                    <div class="container-fluid">
                        
                        <div class="footer-content pt-5 pb-5">
                            <div class="row">
                                <div class="col-sm-12 col-md-5 col-lg-5 mb-30">
                                    <div class="footer-widget">
                                        <div class="footer-logo">
                                            <a href="index.html"><img src="img/logo.png" class="img-fluid" alt="logo"></a>
                                        </div>
                                        <div class="footer-text">
                                            <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                            elit,Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div class="footer-social-icon">
                                            <span>Follow us</span>
                                            <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                            <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                            <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-3 col-lg-2 col-md-6 mb-30">
                                    <div class="footer-widget">
                                        <div class="footer-widget-heading">
                                            <h3>Categories</h3>
                                        </div>
                                        <ul>
                                            <li><a href="#">Category 1</a></li>
                                            <li><a href="#">Category two</a></li>
                                            <li><a href="#">Rice</a></li>
                                            <li><a href="#">Fruits</a></li>
                                            <li><a href="#">Vegetables</a></li>                                
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-5 col-md-6 mb-30">
                                    <div class="footer-widget">
                                        
                                        <div class="row">
                                            <div class="col-md-12 mb-30">
                                                <div class="single-cta">
                                                    <i class="fas fa-map-marker-alt"></i>
                                                    <div class="cta-text">
                                                        <h4>Find us</h4>
                                                        <span>1010 Avenue, sw 54321, chandigarh</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12 mb-30">
                                                <div class="single-cta">
                                                    <i class="fas fa-phone"></i>
                                                    <div class="cta-text">
                                                        <h4>Call us</h4>
                                                        <span>9876543210 0</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12 mb-30">
                                                <div class="single-cta">
                                                    <i class="far fa-envelope-open"></i>
                                                    <div class="cta-text">
                                                        <h4>Mail us</h4>
                                                        <span>mail@info.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="copyright-area">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6 col-lg-6 text-center text-md-left">
                                    <div class="copyright-text">
                                        <p>Copyright &copy; <span id="year-div"></span>, All Right Reserved <a href="#">Company name</a></p>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6 d-none d-lg-block text-center text-md-right">
                                    <div class="footer-menu">
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Terms</a></li>
                                            <li><a href="#">Privacy</a></li>
                                            <li><a href="#">Policy</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>


    </div>

    <div class="modal fade" tabindex="-1" role="dialog" id="deniedPermissionModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="fas fa-times-circle"></i>
                    </button>
                    <h3 class="modal-title">Permission denied</h3>
                </div>
                <div class="modal-body">
                    <p>You dont have permission to access this resource.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">OK</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="modal fade" tabindex="-1" role="dialog" id="logoutModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="fas fa-times-circle"></i>
                    </button>
                    <h3 class="modal-title">Logout</h3>
                </div>
                <div class="modal-body">
                    <p>Do you really want to logout</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success">Yes</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->


    <div class="modal fade" tabindex="-1" role="dialog" id="addModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">                
                <form>
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <i class="fas fa-times-circle"></i>
                        </button>
                        <h3 class="modal-title">Add category</h3>
                    </div>
                    <div class="modal-body">
                        <div class="small-text-label">Type here category name you want to add</div>
                        <div class="form-group">
                            <input id="text" name="text" type="text" class="form-control">
                        </div> 
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success">Submit</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                    </div>
                </form>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->


    <div class="modal fade" tabindex="-1" role="dialog" id="editModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <i class="fas fa-times-circle"></i>
                        </button>
                        <h3 class="modal-title">Edit</h3>
                    </div>
                    <div class="modal-body">
                        <div class="small-text-label">Type here category name you want edit</div>
                        <div class="form-group">
                            <input id="text" name="text" type="text" class="form-control">
                        </div> 
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success">Submit</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                    </div>
                </form>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="modal fade" tabindex="-1" role="dialog" id="deleteModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="fas fa-times-circle"></i>
                    </button>
                    <h3 class="modal-title">Delete</h3>
                </div>
                <div class="modal-body">
                    <p>Do you really want to delete the record</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success">Yes</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->   
  


    <!-- partial -->
    <script src='https://code.jquery.com/jquery-3.1.1.min.js'></script>
    <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>


    <!-- DataTables -->
    <script src="plugins/datatables/jquery.dataTables.min.js"></script>
    <script src="plugins/datatables/dataTables.bootstrap.min.js"></script>
    <script src="plugins/datatables/dataTables.buttons.min.js"></script>
        
    <script type="text/javascript">
        (function(){
            $('#msbo').on('click', function(){
                $('body').toggleClass('msb-x');
            });
        }());


        
        


        var d = new Date();
        var n = d.getFullYear();
        document.getElementById("year-div").innerHTML = n;
    </script>

</body>
</html>
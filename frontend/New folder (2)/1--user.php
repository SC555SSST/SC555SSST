<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>AdminLTE 2 | Starter</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.6 -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="css/AdminLTE.min.css">
    <!-- AdminLTE Skins. We have chosen the skin-blue for this starter
    page. However, you can choose any other skin. Make sure you
    apply the skin class to the body tag so the changes take effect.
    -->


    <!-- DataTables -->
    <link rel="stylesheet" href="plugins/datatables/dataTables.bootstrap.css">
    <link rel="stylesheet" href="plugins/datatables/buttons.dataTables.min.css">


    <link rel="stylesheet" href="css/skins/skin-blue.min.css">
    <link rel="stylesheet" href="css/custom-styles.css">
    <style>
        @media (min-width: 768px){
            i{font-size: 18px !important}

            .navbar-nav>li>a {
                padding-top: 10px !important;
                padding-bottom: 10px !important;
            }

            .fa-envelope-o,.fa-bell-o,.fa-flag-o,.fa-gears{
                font-size: 30px !important
            }
            .navbar-nav > .user-menu .user-image{ 
                float: left;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-right: 10px;
                margin-top: -10px;
            }
            .main-header .navbar .nav > li > a > .label {
                font-size: 16px;
            }
            .control-sidebar.control-sidebar-open, .control-sidebar.control-sidebar-open + .control-sidebar-bg {
                right: 0px;
                top: -8px;
            }
        }

        @media (min-width: 768px){
            .control-sidebar.control-sidebar-open, .control-sidebar.control-sidebar-open + .control-sidebar-bg {
                right: 0px;
                top: 5px;
            }
        }

        li.user-menu a span{
            font-size: 16px !important
        }
        .sidebar-menu i{
            margin-right: 10px;
            font-size: 20px !important
        }

        .logout-btn,
        .logout-btn:focus,
        .logout-btn:active{background-color: #222d32 !important;margin-right: 5px;border: none;margin-top: 2px}
        .logout-btn:hover{background-color: #dd4b39 !important;}

        .pw-change-btn,
        .pw-change-btn:focus,
        .pw-change-btn:active{background-color: #222d32 !important;margin-right: 5px;border: none;margin-top: 2px}
        .pw-change-btn:hover{background-color: #2b3de8 !important;}
    </style>



  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>
<!--
BODY TAG OPTIONS:
=================
Apply one or more of the following classes to get the
desired effect
|---------------------------------------------------------|
| SKINS         | skin-blue                               |
|               | skin-black                              |
|               | skin-purple                             |
|               | skin-yellow                             |
|               | skin-red                                |
|               | skin-green                              |
|---------------------------------------------------------|
|LAYOUT OPTIONS | fixed                                   |
|               | layout-boxed                            |
|               | layout-top-nav                          |
|               | sidebar-collapse                        |
|               | sidebar-mini                            |
|---------------------------------------------------------|
-->
<body class="hold-transition skin-blue sidebar-mini">
    <div class="wrapper">

        <!-- Main Header -->
        <header class="main-header">

            <!-- Logo -->
            <a href="index2.html" class="logo">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <span class="logo-mini"><b>A</b>LT</span>
                <!-- logo for regular state and mobile devices -->
                <span class="logo-lg"><b>Admin</b>LTE</span>
            </a>

            <!-- Header Navbar -->
            <nav class="navbar navbar-static-top" role="navigation">
                <!-- Sidebar toggle button-->
                <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span class="sr-only">Toggle navigation</span>
                </a>
                <!-- Navbar Right Menu -->
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <li>
                            <a href="#" data-toggle="modal" data-target="#pwchangeModal" class="btn btn-info btn-flat pw-change-btn">Change Password</a>
                        </li>
                        <li>
                            <a href="#" data-toggle="modal" data-target="#logoutModal" class="btn btn-danger btn-flat logout-btn">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
      

        <!-- Left side column. contains the logo and sidebar -->
        <aside class="main-sidebar">

            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">

                <!-- Sidebar user panel (optional) -->
                <div class="user-panel">
                    <div class="pull-left image">
                        <img src="img/user2-160x160.jpg" class="img-circle" alt="User Image">
                    </div>
                    <div class="pull-left info">
                        <p>Alexander Pierce</p>
                        <!-- Status -->
                        <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>



                <!-- Sidebar Menu -->
                <ul class="sidebar-menu">

                    <!-- Optionally, you can add icons to the links -->
                    <li class="active"><a href="#"><i class="fa fa-link"></i> <span>Link</span></a></li>
                    <li><a href="#"><i class="fa fa-link"></i> <span>Another Link</span></a></li>
                    <li class="treeview">
                        <a href="#"><i class="fa fa-link"></i> <span>Multilevel</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu">
                            <li><a href="#">Link in level 2</a></li>
                            <li><a href="#">Link in level 2</a></li>
                        </ul>
                    </li>
                </ul>
                <!-- /.sidebar-menu -->
            </section>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <h1>User Category</h1>      
            </section>

            <!-- Main content -->
            <section class="content">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="box">

                            <div class="box-header row">
                                <div class="col-md-9">
                                    <div class="projectSelect clearfix form-group" style="margin-bottom: 15px;"></div>
                                </div>
                            </div>

                            <!-- /.box-header -->
                            <div class="box-body">
                                <table id="userList" class="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Role</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    <?php for ($x = 0; $x <= 100; $x++):?>

                                    <tr>
                                        <td><?php echo 'uid-'.$x?></td>
                                        <td><?php echo 'User-'.$x?></td>                                
                                        <td><?php echo ($x%2)?'Farmer':'Instructor'; ?></td> 
                                        
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
                                </table>
                            </div><!-- /.box-body -->

                        </div><!-- /.box -->
                    </div><!-- /.col -->
                </div> 
            </section><!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <!-- Main Footer -->
        <footer class="main-footer">
            <!-- To the right -->
            <div class="pull-right hidden-xs">Anything you want</div>
            <!-- Default to the left -->
            <strong>Copyright &copy; <span id="year-div"></span> <a href="#">Company</a>.</strong> All rights reserved.
        </footer>

      
      
        <!-- Add the sidebar's background. This div must be placed
               immediately after the control sidebar -->
        <div class="control-sidebar-bg"></div>


    </div>
    <!-- ./wrapper -->



    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Modal Header</h4>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-danger" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>




    <div class="modal fade" id="pwchangeModal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Change password</h4>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="text" class="control-label">Old password</label> 
                            <input id="text" name="text" type="password" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="text1" class="control-label">New password</label> 
                            <input id="text1" name="text1" type="password" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="text2" class="control-label">Confirm password</label> 
                            <input id="text2" name="text2" type="password" class="form-control">
                        </div> 



                    </div>
                    <div class="modal-footer">
                        <div class="form-group margin-0">
                            <button name="submit" type="submit" class="btn btn-primary">Submit</button>
                            <button name="reset" type="reset" class="btn btn-danger">Reset</button>
                        </div>         
                    </div>
                </form>

            </div>
        </div>
    </div>





    <div class="modal fade" tabindex="-1" role="dialog" id="addModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Add User</h4>
                </div>
                <div class="modal-body">
                    <p>One fine body&hellip;</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->


    <div class="modal fade" tabindex="-1" role="dialog" id="editModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Edit User</h4>
                </div>
                <div class="modal-body">
                    <p>One fine body&hellip;</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="modal fade" tabindex="-1" role="dialog" id="deleteModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Delete User</h4>
                </div>
                <div class="modal-body">
                    <p>One fine body&hellip;</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->


    <!-- REQUIRED JS SCRIPTS -->

    <!-- jQuery 2.2.3 -->
    <script src="plugins/jQuery/jquery-2.2.3.min.js"></script>
    <!-- Bootstrap 3.3.6 -->
    <script src="js/bootstrap.min.js"></script>



    <!-- DataTables -->
    <script src="plugins/datatables/jquery.dataTables.min.js"></script>
    <script src="plugins/datatables/dataTables.bootstrap.min.js"></script>
    <script src="plugins/datatables/dataTables.buttons.min.js"></script>


    <!-- AdminLTE App -->
    <script src="js/app.min.js"></script>


    <script type="text/javascript">
        

        $('#userList').on('init.dt', function() {
            $('.add-user')
                .attr('data-toggle', 'modal')
                .attr('data-target', '#addModal');
        });


        $(function () {
            var projTable = $("#userList").DataTable({
                "paging": true,
                "lengthChange": false,
                "searching": true,
                "ordering": true,
                "info": true,
                "autoWidth": false,
                "dom": 'Bfrtip',
                "buttons": [
                    {
                        text: 'Add User',
                        action: function ( e, dt, node, config ) {
                            //$('#addProjectModal').modal('show');
                            $('#add-modal').modal('show');
                            //  alert( 'Button activated' );
                        },
                        className: 'add-user'
                    }
                ]
            });
        });
    </script>

    <!-- Optionally, you can add Slimscroll and FastClick plugins.
         Both of these plugins are recommended to enhance the
         user experience. Slimscroll is required when using the
         fixed layout. -->


    <script type="text/javascript">
        var d = new Date();
        var n = d.getFullYear();
        document.getElementById("year-div").innerHTML = n;
    </script>  

</body>
</html>

 * {
     margin: 0px;
     padding: 0px;
     font-family: sans-serif
 }
 
 header {
     background: #1e272e;
     height: 50px;
 }
 
 .admin_wrapper {
     display: flex;
     /* height: calc(100% - 50px); */
 }
 
 .leftsidebar {
     flex: 2;
     height: 700px;
     background: #2d3436;
 }
 
 .leftsidebar ul {
     list-style: none;
     margin: 0px;
     padding: 0px;
 }
 
 .leftsidebar ul li a {
     padding: 3px;
     margin: 5px;
     display: block;
     border-bottom: 1px solid #1e272e;
     color: #dfe6e9;
     text-decoration: none;
     font-weight: 100;
     font-size: smaller;
 }
 
 .leftsidebar ul li a:hover {
     background: #1e272e;
 }
 /*  -----------------TOOLBAR------------  */
 
 .toolbar {
     /* display: flex; */
     flex: 8;
     height: 100%;
     padding: 5px;
     margin: 5px;
     display: block;
     background: #f8f8f8;
     text-decoration: none;
     font-weight: 100;
     font-size: smaller;
 }
 
 footer {
     position: fixed;
     width: 100%;
     height: 50px;
 }
 
 .far fa-arrow-alt-circle-down {
     color: aliceblue;
 }
 
 .material-icons.md-18 {
     font-size: 18px;
     color: blue;
     padding: 5px;
     float: right;
 }
 
 .material-icons-outlined.md-18 {
     font-size: 18px;
     color: blue;
     padding: 5px;
     float: right;
 }
 /* .material-icons.md-24 { font-size: 24px;color: #0000FF } */
 
 .material-icons.md-36 {
     font-size: 36px;
     color: #0000FF
 }
 
 .material-icons.md-48 {
     font-size: 48px;
     color: #0000FF
 }



<!doctype html>
<html lang="en">

<head>
  <title>Bootstrap</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="my.css" Optional JavaScript -->
  <link
    href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
    rel="stylesheet">

  <!-- <script src="style.css"></script> -->
</head>

<body>
  <!DOCTYPE html>
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>

    </style>
  </head>

  <body>
    <!-- <header>
      <div class="logo">
      </div>
    </header> -->
    <div class="admin_wrapper">
      <div class="leftsidebar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div class="toolbar">
        <i class="material-icons md-18">highlight_off</i>
        <i class="material-icons md-18">save_alt</i>
        <i class="material-icons-outlined md-18">save</i>
        <i class="material-icons md-18">zoom_in</i>
        <i class="material-icons md-18">zoom_out</i>
        <i class="material-icons-outlined md-18">edit</i>
      </div>
    </div>

  </body>

  </html>

</body>

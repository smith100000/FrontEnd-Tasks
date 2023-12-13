// $(document).ready(function() {
//     $("#example").DataTable({ "pageLength": 15});
//     $(".dataTables_length").html("<h4>Brew commands</h4>");
//     $("#example_info").hide();
// });

// $("body").on("click",".getJobDetails",function(){
//     $("#basicJobDetailsModal").modal({
//         backdrop: 'static',
//         keyboard: false
//     })
// })

// $(document).ready(function(){
//   $('[data-toggle="popover"]').popover({
//         placement : 'top',
//         trigger : 'hover'
//     }
//   );
// });

$( ".reaction-view" ).mouseenter(function() {
  $(this).find(".reply-reaction-view").css("display","block");
  $(this).find(".row").addClass("record-view");
});

$( ".reaction-view" ).mouseleave(function() {
  $(this).find(".reply-reaction-view").css("display","none");
  $(this).find(".row").removeClass("record-view");
});

$( ".divRemover" ).click(function(){
  $(this).parent().remove()
})
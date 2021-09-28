/* 초기설정 */
$(function(){
  $("#korean").addClass("selectedLang");

  func_lang();



})

/* 언어 선택에 따른 색상변경 */
function func_lang() {
  $("#korean").click(function () {
    $(this).addClass("selectedLang");
    $("#english").removeClass("selectedLang");
  })
  $("#english").click(function () {
    $(this).addClass("selectedLang");
    $("#korean").removeClass("selectedLang");
  })
}
// $(document).ready(function() {
//     $('input.deletable').wrap('<span class="deleteicon"></span>').after($('<span>x</span>').click(function() {
//         $(this).prev('input').val('').trigger('change').focus();
//     }));
// });

/* 텍스트 입력 후 삭제 */
$(document).ready(function() {
    var btnClear = document.querySelectorAll('.btnClear');
    btnClear.forEach(function(btn){
        btn.addEventListener('click', function(e){
            btn.parentNode.querySelector('input').value = "";
            e.preventDefault(); // 기본 이벤트 동작 막기
        })
    })

});
// // tabindex 속성 추가
// $('.layer-up').attr('tabindex','0').focus();
// tabindex 속성 삭제
// $('.layer-up').css('display', 'none').removeAttr('tabindex');







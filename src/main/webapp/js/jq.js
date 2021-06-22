<script type="text/javascript">
    $(document).ready(function(e) {
        //点击li
        $('#nav li').click(function(e) {
            $('.liclick').removeClass('liclick');
            $(this).addClass('liclick');
        });
        //每个li下面添加一个底色
        var color=['#B9D329','#C0EBF7','#B9D329','#69BCF3','#79D9F3','#FA5F94','#ACD180','#FAB4CC','#FFAE5B'];
        $('#nav li').append('<span>');
        $('#nav span').each(function(index, element) {
            $(this).css('background-color',color[index]);
        });
        //移动到li上的时候颜色色块升起
        $('#nav li').hover(function(){
            $(this).children('span').animate({'top':-38},200);
            //获得当前li的索引编号
        },function(){
            $(this).children('span').animate({'top':0},200);
        });
    });
</script>
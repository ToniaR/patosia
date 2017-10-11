    $(function() {
        $('.first').easyPieChart({
            barColor: '#ff6861',
            trackColor: '#d1d3d7',
            scaleColor: '#e6f5e6',
            lineWidth: 4,
            lineCap: 'square',
            //easing: 'easeOutBounce',
            easing: 'easeOutQuart',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('.second').easyPieChart({
            barColor: '#59606d',
            trackColor: '#d1d3d7',
            scaleColor: '#e6f5e6',
            lineWidth: 4,
            lineCap: 'square',
//          easing: 'easeOutBounce',
            easing: 'easeOutQuart',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('.third').easyPieChart({
            barColor: '#67adb0',
            trackColor: '#d1d3d7',
            scaleColor: '#e6f5e6',
            lineWidth: 4,
            lineCap: 'square',
            //easing: 'easeOutBounce',
            easing: 'easeOutQuart',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('.four').easyPieChart({
            barColor: '#0c555c',
            trackColor: '#d1d3d7',
            scaleColor: '#e6f5e6',
            lineWidth: 4,
            lineCap: 'square',
            //easing: 'easeOutBounce',
            easing: 'easeOutQuart',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('.five').easyPieChart({
            barColor: '#0c555c',
            trackColor: '#d1d3d7',
            scaleColor: '#e6f5e6',
            lineWidth: 4,
            lineCap: 'square',
            easing: 'easeOutQuart',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('.six').easyPieChart({
            barColor: '#59606d',
            trackColor: '#d1d3d7',
            scaleColor: '#e6f5e6',
            lineWidth: 4,
            lineCap: 'square',
            //easing: 'easeOutBounce',
            easing: 'easeOutQuart',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('.seven').easyPieChart({
            barColor: '#67adb0',
            trackColor: '#d1d3d7',
            scaleColor: '#e6f5e6',
            lineWidth: 4,
            lineCap: 'square',
//          easing: 'easeOutBounce',
            easing: 'easeOutQuart',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('.eight').easyPieChart({
            barColor: '#ff6861',
            trackColor: '#d1d3d7',
            scaleColor: '#e6f5e6',
            lineWidth: 4,
            lineCap: 'square',
            //easing: 'easeOutBounce',
            easing: 'easeOutQuart',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        var chart = window.chart = $('.chart').data('easyPieChart');
        $('.js_update').on('click', function() {
            chart.update(Math.random()*200-100);
        });
       });
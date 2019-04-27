/*
Plugin Name : kounty JQuery Countdown Premium Plugin
Author: codeexposer;
version: 1.0;
Release Date:8/2/2018

*/
$(document).ready(function () {
    (function kounty($) {
        $('.kounty-countdown').each(function () {
            var countContainer = $(this),
                myTimer = countContainer.attr('data-timer-date'),
                countDownDate = new Date(myTimer).getTime(),
                countMessage = countContainer.attr('data-countdown-message'),
                countlabel = $(this).attr('data-countdown-seperator'),
                sTimerfunction = setInterval(function () {
                    var cDate = new Date().getTime();
                    var kountdis = countDownDate - cDate;
                    var days = Math.floor(kountdis / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((kountdis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((kountdis % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((kountdis % (1000 * 60)) / 1000);
                    if (countlabel == 'dots') {
                        countContainer.addClass('countdown-dots');
                        countContainer.children(".countdown-days").html(days);
                        countContainer.children(".countdown-hours").html(hours);
                        countContainer.children(".countdown-minutes").html(minutes);
                        countContainer.children(".countdown-seconds").html(seconds);
                    }
                    if (countlabel == 'label') {
                        countContainer.addClass('countdown-label');
                        countContainer.children(".countdown-days").html(days).append("<span> days </span>");
                        countContainer.children(".countdown-hours").html(hours).append("<span> hours </span>");
                        countContainer.children(".countdown-minutes").html(minutes).append("<span> minutes </span>");
                        countContainer.children(".countdown-seconds").html(seconds).append("<span> seconds </span>");
                    } else {
                        countContainer.children(".countdown-days").html(days).append("<span> days </span>");
                        countContainer.children(".countdown-hours").html(hours).append("<span> hours </span>");
                        countContainer.children(".countdown-minutes").html(minutes).append("<span> minutes </span>");
                        countContainer.children(".countdown-seconds").html(seconds).append("<span> seconds </span>");
                    }
                    if (kountdis < 0) {
                        clearInterval(sTimerfunction);
                        countContainer.html(countMessage);
                        countContainer.addClass('countdown-finished');
                    } else {
                        countContainer.removeClass('countdown-finished');
                    }
                }, 1000);
        });
    })(jQuery);
});
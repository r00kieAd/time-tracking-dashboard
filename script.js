$(document).ready(function() {
    $.ajax({
        url: "./data.json",
        dataType: "json",
        success: function(data) {
            fillWorkData(data[0], 'dly');
            fillPlayData(data[1], 'dly');
            fillStudyData(data[2], 'dly');
            fillExerciseData(data[3], 'dly');
            fillSocialData(data[4], 'dly');
            fillSelfCareData(data[5], 'dly');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Error loading JSON file: " + textStatus);
        }
    });
});

function fillWorkData(obj, time_frame) {
    if (time_frame == 'mthly') {
        $('.work-time').text(`${obj.timeframes.monthly.current}hrs`);
        $('.work-history').text(`Last Month - ${obj.timeframes.monthly.previous}hrs`);
    } else if (time_frame == 'wkly') {
        $('.work-time').text(`${obj.timeframes.weekly.current}hrs`);
        $('.work-history').text(`Last Week - ${obj.timeframes.weekly.previous}hrs`);
    } else {
        $('.work-time').text(`${obj.timeframes.daily.current}hrs`);
        $('.work-history').text(`Yesterday - ${obj.timeframes.daily.previous}hrs`);
    }
};

function fillPlayData(obj, time_frame) {
    if (time_frame == 'mthly') {
        $('.play-time').text(`${obj.timeframes.monthly.current}hrs`);
        $('.play-history').text(`Last Month - ${obj.timeframes.monthly.previous}hrs`);
    } else if (time_frame == 'wkly') {
        $('.play-time').text(`${obj.timeframes.weekly.current}hrs`);
        $('.play-history').text(`Last Week - ${obj.timeframes.weekly.previous}hrs`);
    } else {
        $('.play-time').text(`${obj.timeframes.daily.current}hrs`);
        $('.play-history').text(`Yesterday - ${obj.timeframes.daily.previous}hrs`);
    }
};

function fillStudyData(obj, time_frame) {
    if (time_frame == 'mthly') {
        $('.study-time').text(`${obj.timeframes.monthly.current}hrs`);
        $('.study-history').text(`Last Month - ${obj.timeframes.monthly.previous}hrs`);
    } else if (time_frame == 'wkly') {
        $('.study-time').text(`${obj.timeframes.weekly.current}hrs`);
        $('.study-history').text(`Last Week - ${obj.timeframes.weekly.previous}hrs`);
    } else {
        $('.study-time').text(`${obj.timeframes.daily.current}hrs`);
        $('.study-history').text(`Yesterday - ${obj.timeframes.daily.previous}hrs`);
    }
};

function fillExerciseData(obj, time_frame) {
    if (time_frame == 'mthly') {
        $('.exercise-time').text(`${obj.timeframes.monthly.current}hrs`);
        $('.exercise-history').text(`Last Month - ${obj.timeframes.monthly.previous}hrs`);
    } else if (time_frame == 'wkly') {
        $('.exercise-time').text(`${obj.timeframes.weekly.current}hrs`);
        $('.exercise-history').text(`Last Week - ${obj.timeframes.weekly.previous}hrs`);
    } else {
        $('.exercise-time').text(`${obj.timeframes.daily.current}hrs`);
        $('.exercise-history').text(`Yesterday - ${obj.timeframes.daily.previous}hrs`);
    }
};

function fillSocialData(obj, time_frame) {
    if (time_frame == 'mthly') {
        $('.social-time').text(`${obj.timeframes.monthly.current}hrs`);
        $('.social-history').text(`Last Month - ${obj.timeframes.monthly.previous}hrs`);
    } else if (time_frame == 'wkly') {
        $('.social-time').text(`${obj.timeframes.weekly.current}hrs`);
        $('.social-history').text(`Last Week - ${obj.timeframes.weekly.previous}hrs`);
    } else {
        $('.social-time').text(`${obj.timeframes.daily.current}hrs`);
        $('.social-history').text(`Yesterday - ${obj.timeframes.daily.previous}hrs`);
    }
};

function fillSelfCareData(obj, time_frame) {
    console.log(obj);
    if (time_frame == 'mthly') {
        $('.selfcare-time').text(`${obj.timeframes.monthly.current}hrs`);
        $('.selfcare-history').text(`Last Month - ${obj.timeframes.monthly.previous}hrs`);
    } else if (time_frame == 'wkly') {
        $('.selfcare-time').text(`${obj.timeframes.weekly.current}hrs`);
        $('.selfcare-history').text(`Last Week - ${obj.timeframes.weekly.previous}hrs`);
    } else {
        $('.selfcare-time').text(`${obj.timeframes.daily.current}hrs`);
        $('.selfcare-history').text(`Yesterday - ${obj.timeframes.daily.previous}hrs`);
    }
};

$('.time-frame').click(
    function() {
        var time_frame = $(this).prop('id');
        $('.time-frame').removeClass('default');
        $(this).addClass('default');
        $.ajax({
            url: "./data.json",
            dataType: "json",
            success: function(data) {
                fillWorkData(data[0], time_frame);
                fillPlayData(data[1], time_frame);
                fillStudyData(data[2], time_frame);
                fillExerciseData(data[3], time_frame);
                fillSocialData(data[4], time_frame);
                fillSelfCareData(data[5], time_frame);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Error loading JSON file: " + textStatus);
            }
        });
    }
)

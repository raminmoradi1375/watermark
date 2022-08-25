
// variable
let url = './watermark';
let zoom_edit = 100;
let zoom_eidt_arrowX = 0 ;
let zoom_eidt_arrowY = 0 ;


// render image 
$(document).ready(() => {

    $("#upload-image-background").change((e) => {
        e.preventDefault();
        const file = e.target.files[0];
        db = new FormData()
        db.append('file', file);
        if (file) {
            const xhttp = new XMLHttpRequest();
            xhttp.onload = (resp) => {
                let result = resp.target.responseText;
                let json_res = JSON.parse(result)
                if (json_res.Result == true) {
                    $('.view-edit').show();

                    $('#img-view').css({
                        backgroundImage: `url('watermark/../asset/image/image-edit/${json_res.image_name}')`,
                        backgroundPosition: "center",
                        backgroundSize: "100%"
                    })


                }
            }
            xhttp.open("post", `${url}../../core/php/upload-file.php`, true);
            xhttp.send(db);


        }

    });

});

// edit zoom item 
$('#edit-zoom').click(() => {
    $('#zoom-item-box').show()
    $('#edit-zoom').hide()
    $('#edit-filter').hide()
    $('#upload-image-main').hide()

})



// zoom edit back-image 

// zoom plus
$('#zoom-plus').click(() => {

    zoom_plus = zoom_edit * 1.5;
    zoom_edit = zoom_plus
    $('#img-view').css({
        'backgroundSize': `${zoom_edit}%`
    });

})

// zoom mines
$('#zoom-mines').click(() => {

    zoom_plus = zoom_edit / 1.5;
    zoom_edit = zoom_plus
    $('#img-view').css({
        'backgroundSize': `${zoom_edit}%`
    });

})

// zoom arrow top
$('#zoom-arrow-top').click(() => {
    zoom_top = zoom_eidt_arrowY + 10 ;
    zoom_eidt_arrowY = zoom_top ;
    $('#img-view').css({
        'backgroundPosition':  `${zoom_eidt_arrowX}px ${zoom_eidt_arrowY}px`
    });
})

// zoom arrow down
$('#zoom-arrow-down').click(() => {
    zoom_down = zoom_eidt_arrowY - 10 ;
    zoom_eidt_arrowY = zoom_down ;
    $('#img-view').css({
        'backgroundPosition':  `${zoom_eidt_arrowX}px ${zoom_eidt_arrowY}px`
    });
})

// zoom arrow right
$('#zoom-arrow-right').click(() => {
    zoom_right = zoom_eidt_arrowX - 10 ;
    zoom_eidt_arrowX = zoom_right ;
    $('#img-view').css({
        'backgroundPosition':  `${zoom_eidt_arrowX}px ${zoom_eidt_arrowY}px`
    });
})

// zoom arrow left
$('#zoom-arrow-left').click(() => {
    zoom_left = zoom_eidt_arrowX + 10 ;
    zoom_eidt_arrowX = zoom_left ;
    $('#img-view').css({
        'backgroundPosition':  `${zoom_eidt_arrowX}px ${zoom_eidt_arrowY}px`
    });
})

// zoom arrow default
$('#zoom-arrow-default').click(() => {
    $('#img-view').css({
        'backgroundPosition': '0 0',
        'backgroundSize': "100%"
    });
})

// cansel zoom 

$('#cansel-zoom').click( () => {
    $('#zoom-item-box').hide()
    $('#edit-zoom').show()
    $('#edit-filter').show()
    $('#upload-image-main').show()
})


// edit filet 
$('#edit-filter').click(() => {
    $('#filter-item-box').show()
    $('#edit-zoom').hide()
    $('#edit-filter').hide()
    $('#upload-image-main').hide()
    
})


// cansel zoom 

$('#cansel-filter').click( () => {
    $('#filter-item-box').hide()
    $('#edit-zoom').show()
    $('#edit-filter').show()
    $('#upload-image-main').show()
})




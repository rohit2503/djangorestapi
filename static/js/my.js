$.widget( "custom.progressbar", {
    _create: function() {
        var progress = this.options.value + "%";
        this.element
            .addClass( "progressbar" )
            .text( progress );
    }
});


$( "<div></div>" )
    .appendTo( "body" )
    .progressbar({ value: 20 });
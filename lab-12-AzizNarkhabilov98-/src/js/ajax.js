import $ from 'jquery'
import story  from '../txt/story.txt'

const loadPage=function(){

	// $('#wordsList').text(story);

	$('#lblTitle').text('Hello World');

    console.log(story);

	// $('.container').append($('<div>').text('Some random text'));

	$('#btnSearch').click(function(){
		const svc='http://api.urbandictionary.com/v0/define';
        const args={
            term: $('#txtWord').val()
        }

        $.ajax({
            url: svc,
            type: 'GET',
            dataType: 'json',
            data: args,
            error: function() {},
            success: function(obj) {
            	$('#wordsList').html('');

                for (let i=0; i<obj.list.length;i++) {
                    let cObj=obj.list[i];
                    let d = $('<div/>');


                    d.append($('<p/>').html(cObj.definition));
                    d.append($('<p/>').html(cObj.example));
                    d.append($('<a>More...</a>').attr('href',cObj.permalink));
                    d.append($('<hr>'));
                    
                    $('#wordsList').append(d);
                }
            }
        });

        // $.getJSON(svc, {term: $('#txtWord').val()}, function(obj) {
        //         $('#container').html('');
        //         for (var i=0; i<obj.list.length;i++) {
        //             var cObj=obj.list[i];
        //             var d = $('<div/>');


        //             d.append($('<p/>').html(cObj.definition));
        //             d.append($('<p/>').html(cObj.example));
        //             d.append($('<a>More...</a>').attr('href',cObj.permalink));

        //             $('#container').append(d);
        //         }
        // });
    });
}

export { loadPage }
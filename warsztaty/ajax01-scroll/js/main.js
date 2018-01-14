$(function() {


            $(window).scroll(function() {
                    if($(window).scrollTop() == $(document).height() - $(window).height()) 
                        {
                            $.ajax({
                                url: 'https://jsonplaceholder.typicode.com/users',
                                success: function (data) {
                                    data.forEach(function (element) {
                                        $('li:last').after('<br>'+'<li> User ID:' + element.id + '</li>' + '<li> User Name:' + element.username + '</li>'  + '<li> User URL:' + element.website + '</li>');
                                    });
                                },
                                error: function (response) {
                                    console(response.responseText)
                                }
                            });
                        }
                    });
            });

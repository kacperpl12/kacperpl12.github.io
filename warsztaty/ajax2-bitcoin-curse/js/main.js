$(function(){
    $.getJSON('https://blockchain.info/pl/ticker',function(data){
        $.each(data, function(key, value){
            $('#myExample').append('<option value="' + key + '">' + key + '</option>');
            
            
        });
    }); 
    $('input[type=button]').click(function(){
        var waluta = $('#myExample').val();
        var wartosc = $('#textare').val();
        
        pobierzBTC(waluta, wartosc)
    });
   
});
    function pobierzBTC(waluta, wartosc) {
        $.ajax({
            url: 'https://blockchain.info/tobtc?currency=' + waluta + '&value=' +wartosc,
            success: function(response) {
                $('#btc').text(response);
            },
            error: function(response) {
                console.log(response);
            }
        })
    }
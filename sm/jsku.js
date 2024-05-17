
$(document).ready(function(){
            $('#next').click(function(){
                var isi='';
                var nama=['Dani', 'Zay','Ucok','Danu','Nana'];
                for(var id =6; id<=10; id++){                    
                    isi +='<tr>'+
                            '<td>'+id+'</td>'+
                            '<td>'+id+'</td>'+
                            '<td>'+nama[id-6]+'</td>'+
                            '<td>Member</td>'+
                            '<td>'+
                                '<a href="#" id = "hapus_btn" data-id="'+id+'" data-aksi="hapus">hapus</a>\n'+
                                '<a href="#" id = "ubah_btn" data-id="'+id+'" data-aksi="ubah">ubah</a>\n'+
                                '<a href="#" id = "detail_btn" data-id="'+id+'" data-aksi="detail">detail</a>\n'+
                            '</td>'+
                           '</tr>';
                }
                $('#isiTabel').html(isi);
            })
            
            $('#hapus_btn').click(function(){
                    var id=$(this).data('id');
                    var aksi=$(this).data('aksi');
                    var nama=['Dani', 'Zay','Ucok','Danu','Nana'];
                    console.log(id + ' '+aksi+' '+nama[id-6]);

                    $('#pilihan').html(
                        '<span>'+
                            '<h3>Pilihan:</h3>'+
                            '<h4>Nama :'+nama[id-6]+'</h4>'+
                            '<h4>ID :'+id+'</h4>'+
                            '<h4>Aksi :'+aksi+'</h4>'+
                        '</span>'                    
                )
            })
            $('#ubah_btn').click(function(){
                var id=$(this).data('id');
                var aksi=$(this).data('aksi');
                var nama=['Dani', 'Zay','Ucok','Danu','Nana'];
                console.log(id + ' '+aksi+' '+nama[id-6]);

                $('#pilihan').html(
                    '<span>'+
                        '<h3>Pilihan:</h3>'+
                        '<h4>Nama :'+nama[id-6]+'</h4>'+
                        '<h4>ID :'+id+'</h4>'+
                        '<h4>Aksi :'+aksi+'</h4>'+
                    '</span>'                    
            )
        })
        
        })
    
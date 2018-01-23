const fs = require('fs');

if( process.argv.length >= 3 ) {
    var directoryPath = process.argv[2];

    var arrFileList = fs.readdirSync( directoryPath );

    for( var i = 0; i < arrFileList.length; i++ ) {
        console.log( arrFileList[ i ] );
    }

} else {

    var arrFolderList = [ '01_네트워크 프로그래밍의 시작', '02_리눅스 기반 프로그래밍', '03_윈도우 기반 프로그래밍', '04_네트워크 프로그래밍 마무리하기' ];
    var arrFileList = [];

    for( var i = 0; i < arrFolderList.length; i++ ) {
        arrFileList = arrFileList.concat( fs.readdirSync( 'C:\\Users\\wheej\\Downloads\\윤성우 TCPIP\\' + arrFolderList[ i ] ) );
    }

    for( var i = 0; i < arrFileList.length; i++ ) {
        console.log( arrFileList[ i ] );
    }

}




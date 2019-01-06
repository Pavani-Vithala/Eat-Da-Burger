var connection = require("./connection.js");

var orm = {
    selectAll: function (tableinput) {
        var queryString = "SELECT * from ??";
        var query = connection.query(queryString, [tableinput],
            function (err, result) {

                if (err) throw err;

                console.log("BASE QUERY:", queryString);
                console.log("BUILT QUERY:", query.sql);
                console.log("QUERY RESULT:", result);
            }
        );
    },

    insertOne: function (tableInput,col2, col3) {
        var queryString = "INSERT into ?? values(??,??)";
        var query = connection.query(queryString, [tableInput,col2, col3],
            function (err, result) {
                if (err) throw err;

                console.log("BASE QUERY:", queryString);
                console.log("BUILT QUERY:", query.sql);
                console.log("QUERY RESULT:", result);
            });
    },

    updateone: function (tableinput, colToUpdate, valToUpdate, colToSearch, valOfCol) {
        var queryString = "UPDATE ?? set ?? = ? where ?? = ? ";
        var query = connection.query(queryString, [tableinput, colToUpdate, valToUpdate, colToSearch, valOfCol], function (err, result) {
            if (err) throw err;

            console.log("BASE QUERY :", queryString);
            console.log("BUILT QUERY:", query.sql);
            console.log("QUERY RESULT:", result);

        });

    }
};
module.export = orm;
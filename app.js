const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

yargs.command({
    command:'add',
    describe:'Add new note',
    builder:{
        tite:{
            describe:'Note title'
        }
    },
    handler:function(argv){
        console.log("Adding new Note!",argv)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove note',
    handler:function(){
        console.log("Removing the note");
    }
})

yargs.command({
    command:'list',
    describe:'listing all notes',
    handler:function(){
        console.log("Listing all notes!");
    }
})
yargs.command({
    command:'read',
    describe:'Reading note',
    handler:function(){
        console.log("Reading a note");
    }
})
console.log(yargs.argv);
/** 
 * agregar
 * eleminar
 * marcar como hecho
 * guardar
 * borrar completados
 */
'use strict';

var config = {
	keys: {
		enter: 13
	}
};

var Todo = function(options){
	console.log('se creo una nueva todo');
	this.options = $.extend(options, {

		todoAppEl: '.todo-app',
		inputEl: '.todo.input',
		listEl: '.todo-list',
		removeEl: '.todo-item-remove',
		doneEl: '.todo-item-toggle-done',
		clearEl: '.todo-clear-done'

	});

	this.$app = $(this.options.todoAppEl);
    this.$input = $(this.options.inputEl);
    this.$list = $(this.options.listEl);

    this.bindEvents = function (){
    	this.$app.on('click', this.options.removeEl, this, this.remove);
    	this.$app.on('click', this.options.clearEl, this, this.clearDone);
    };
    this.bindEvents();
};

Todo.prototype.add = function(){

};

Todo.prototype.remove = function(event){
	var that = event.data;
	event.preventDefault();
	$(this).closest('li').remove();
};

Todo.prototype.toggleDone = function(){

};

Todo.prototype.clearDone = function(event){
	var that = event.data;
	event.preventDefault();
	debugger;
	that.$list.children('[data-done="true"]').remove(); 

};

Todo.prototype.save = function(){

};

Todo.prototype.showSaveData = function(){

};

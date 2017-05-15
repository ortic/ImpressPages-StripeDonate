var IpWidget_StripeDonate = function () {

  this.widgetObject = null;
  this.confirmButton = null;
  this.popup = null;
  this.data = {};
  this.nameInput = null;
  this.descriptionInput = null;
  this.amountInput = null;

  this.init = function (widgetObject, data) {

    this.widgetObject = widgetObject;
    this.data = data;

    var container = this.widgetObject.find('.ipsContainer');

    var context = this; // set this so $.proxy would work below

    this.$widgetOverlay = $('<div></div>');
    this.widgetObject.prepend(this.$widgetOverlay);
    this.$widgetOverlay.on('click', $.proxy(openPopup, this));

    $(document).on('ipWidgetResized', function () {
      $.proxy(fixOverlay, context)();
    });
    $(window).on('resize', function () {
      $.proxy(fixOverlay, context)();
    });
    $.proxy(fixOverlay, context)();


    container.css('min-height', '30px');
  };


  var fixOverlay = function () {
    this.$widgetOverlay
      .css('position', 'absolute')
      .css('z-index', 1000) // should be higher enough but lower than widget controls
      .width(this.widgetObject.width())
      .height(Math.max(this.widgetObject.height(), 30));
  }


  this.onAdd = function () {
    $.proxy(openPopup, this)();
  };

  var openPopup = function () {
    debugger;
    this.popup = $('#ipWidgetDonateButtonPopup');
    this.confirmButton = this.popup.find('.ipsConfirm');
    this.nameInput = this.popup.find('#name');
    this.descriptionInput = this.popup.find('#description');
    this.amountInput = this.popup.find('#amount');

    this.nameInput.val((this.data && this.data.name) ? this.data.name : '');
    this.descriptionInput.val((this.data && this.data.description) ? this.data.description : '');
    this.amountInput.val((this.data && this.data.amount) ? this.data.amount : '');

    this.popup.modal(); // open modal popup

    this.confirmButton.off(); // ensure we will not bind second time
    this.confirmButton.on('click', $.proxy(save, this));
  };

  var save = function () {
    var data = {
      name: this.nameInput.val(),
      description: this.descriptionInput.val(),
      amount: this.amountInput.val()
    };

    this.widgetObject.save(data, 1); // save and reload widget
    this.popup.modal('hide');
  };

};



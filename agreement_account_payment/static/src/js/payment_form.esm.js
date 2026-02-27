import PaymentForm from "@payment/js/payment_form";

PaymentForm.include({
    events: Object.assign({}, PaymentForm.prototype.events, {
        'change [name="terms_conditions"]': "_changeTermsConditions",
    }),

    _changeTermsConditions(event) {
        const toggleButton = event.target.checked
            ? this._enableButton
            : this._disableButton;
        toggleButton.call(this, false);
    },
});

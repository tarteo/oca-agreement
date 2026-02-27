import PaymentButton from "@payment/js/payment_button";

PaymentButton.include({
    _canSubmit() {
        const superResult = this._super(...arguments);
        const termConditionCheckbox = document.querySelector(
            "#js_payment_terms_conditions"
        );
        if (!termConditionCheckbox) {
            // Terms and conditions checkbox is not present.
            return superResult;
        }
        return (
            superResult &&
            document.querySelectorAll('input[name="terms_conditions"]:checked')
                .length === 1
        );
    },
});

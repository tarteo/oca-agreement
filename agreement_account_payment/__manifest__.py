{
    "name": "Agreement Account Payment",
    "summary": "Agreement on payments",
    "version": "18.0.1.0.0",
    "category": "Contract",
    "author": "Onestein, Odoo Community Association (OCA)",
    "website": "https://github.com/OCA/agreement",
    "license": "AGPL-3",
    "depends": [
        "agreement_account",
        "account_payment",
    ],
    "data": [
        "templates/account_portal.xml",
    ],
    "assets": {
        "web.assets_frontend": [
            "agreement_account_payment/static/src/js/payment_button.esm.js",
            "agreement_account_payment/static/src/js/payment_form.esm.js",
        ]
    },
}

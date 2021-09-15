let stripeLoaded = false;
let stripeUrl = '';

// This function is called when the app navigates to this view (using a link)
function init() {
    // initialize any data here that should be available when the view is shown
    console.log('it ran');
    view.myvar = '4';
}

// This function is called when the user returns to this view from another view
function resume(from) {
    // from.back       (true/false) if true, the user pressed the "Back" button to return to this view
    // from.dismissed  (true/false) if true, the app dismissed to return to this view
    // from.path       contains the path of the view that the user returned from
    // if any data needs to be refreshed when the user returns to this view, you can do that here:
}

function buttonPress() {
  // TODO implement

  component.html({id: 'stripe'})
}

function getSrc() {
    return !stripeLoaded? '@local/stripe/index.html' : stripeUrl;
}

function loadStripe() {
    stripeUrl = 'https://checkout.stripe.com/pay/cs_test_a11TtlQDF9PtjHwVvhFYLzMvD6u8Ht6ptW7LcprXZFatpsAe423VyHTH3Q#fidkdWxOYHwnPyd1blpxYHZxWlVkNmpcMHZtQWp9NGFJf0lCb2hXcEpPVjU1NktfM2JDbFcnKSdjd2poVmB3c2B3Jz9xd3BgKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl';
    stripeLoaded = true;
}
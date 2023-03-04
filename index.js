const WAIT_TIME_MS = 2000;
// The buttons we care about have class "offer-cta" and title "Add to Card."
// The other buttons, e.g., "Add a Member," don't have the "Add to Card" title.
const offerButtons = document.querySelectorAll('button.offer-cta[title="Add to Card"]');
for (let i = 0; i < offerButtons.length; ++i) {
	setTimeout(() => {
		try {
			console.log('Clicking ' + offerButtons[i].id);
			offerButtons[i].click();
		} catch (e) {
			console.error(e);
		}
	}, i * WAIT_TIME_MS)
}
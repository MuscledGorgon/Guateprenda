WebFontConfig = {
	timeout: 2000
}

if ( indi_typekit_id.length > 0 ) {
	WebFontConfig.typekit = {
		id: indi_typekit_id
	}
}

if ( indi_google_fonts.length > 0 ) {
	WebFontConfig.google = {
		families:  indi_google_fonts
	}
}

if ( (indi_google_fonts.length > 0 || indi_typekit_id.length > 0) && navigator.userAgent.indexOf("Speed Insights") == -1) {
	WebFont.load( WebFontConfig );
}

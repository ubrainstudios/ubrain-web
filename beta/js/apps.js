//Animate triangles
	
	jQuery('.global_title, .inner_banner h2, .inner_banner h3').bind('inview', function (event, visible) {
            jQuery(this).addClass("animated fadeIn");
	});
	
	jQuery('.client_sec figure, .banner_logo img, .softw figure').bind('inview', function (event, visible) {
            jQuery(this).addClass("animated zoomIn");
    });
	
	jQuery('.craft_block figure,.craft_block h3,.craft_block p,.hire_sec p,.counter_block small, .counter_block p, .app_sec img, .design_sec .info, ul.navbar_link > li, .offcanvas-body h6, .offcanvas-body a, .project_sec .inner, .location_block .view_link, .location_block p, .location_block h3, .location_block figure, .form_info, .softw p, .work_rating,.upwork_sec .inner, .service, .service figure, .service h3, .service ul').bind('inview', function (event, visible) {
            jQuery(this).addClass("animated fadeInUp");
    });
	
	jQuery('.process_sec .global_title ~ p, .get_sec a, .get_sec .global_title~label, .work_foot p, .software_sec h3, .hero_sec h1 small, .hero_sec h1, .hero_sec .info, .hero_sec .view_link, .services_sec p').bind('inview', function (event, visible) {
            jQuery(this).addClass("animated fadeInLeft");
	});
	
	jQuery('.process p,.process h3,.technology_sec p, .tool_info h3, .app_sec p, .dribbble_btn').bind('inview', function (event, visible) {
            jQuery(this).addClass("animated fadeInRight");
	});

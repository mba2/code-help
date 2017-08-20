module.exports = function (grunt) {
	
		// THIS VARIABLE DEFINES IF YOUR ASSETS WILL BE DEPLOYED AS MULTIPLE FILES OR IF THEY'RE GONNA BE DEPLOYED AS A SINGLE, UNIQUE ONE
		// POSSIBLE VALUES: string "multiple_files" || "single_file"
		var assets_mode = (grunt.option("assets_mode")) ? grunt.option("assets_mode") : "multiple_files";
		
		grunt.initConfig({
			pkg : grunt.file.readJSON('package.json'),
			// FOLDERS PATHS, STORED IN VARIABLES
			dir: {
				source		: "src",
				dev	    	: "dev",
				deploy		: "deploy",
				public 		: "public", 
				resources	: "resources", 
				tests		: "tests", 
				styles		: "styles",
				temp_styles	: "temp-styles",
				js			: "js",
				temp_js		: "temp-js",
				fonts		: "fonts",
				images		: "img",
				currTask	: grunt.cli.tasks[0] || "dev",
				assets_mode	: grunt.option("assets_mode") || "multiple_files"
			},
	
			//COPY PROCESS
			copy: {
				//THIS TARGET AIMS TO ALL PROJECT'S ASSETS
				"dev": {
					"files": [{
						"expand": true,
						"cwd": "<%= dir.source %>",
						"src": ["?(resources||tests)/**/*", 
								"public/*.{html,php}"	
							   ],
						"dest": "<%= dir.dev %>"
					}]
				},
				//THIS TARGET AIMS TO ALL PROJECT'S FILES AND FOLDERS PREPARING THE RESULT TO BE DEPLOYED
				"deploy" : {
				  "files" : [
					{
					  "expand" : true,
					  "cwd": "<%= dir.source %>",
					  "src" : ["*(public||resources||tests)/**/*",
							  ],
					  "dest" : "<%= dir.deploy %>"
					}
				  ]
				},
	
				// THIS TARGET TRANSFERS ONLY ALTERED BACKEND ASSETS
				backEnd: {
					files: [{
						expand	: true,
						cwd		: "<%= dir.source %>",
						src		: ["*(<%= dir.resources %>||<%= dir.tests %>)/**/*", ],
						dest	: "<%= dir.dev %>/"
					}]
				},
	
				// THIS TARGET TRANSFERS ONLY ALTERED 'PUBLIC' FILES (.php files or .html files)
				public_PHP_HTML: {
					files: [{
						expand	: true,
						cwd		: "<%= dir.source %>",
						src		: "<%= dir.public %>/*.{php,html}",
						dest	: "<%= dir.dev %>/"
					}]
				},
	
				// THIS TARGET TRANSFERS PURE CSS IN 'DEV' MODE
				pureCSS_dev: {
					files: [{
						expand: true,
						flatten: true,
						cwd: "<%= dir.source %>",
						src: ["<%= dir.public %>/**/*.css"],
						dest: "<%= dir.dev %>/<%= dir.public %>/<%= dir.styles %>",
					}]
				},
				// THIS TARGET TRANSFERS PURE CSS IN 'DEPLOY' MODE
				pureCSS_deploy: {
					files: [{
						expand: true,
						flatten: true,
						cwd: "<%= dir.source %>",
						src: ["<%= dir.public %>/**/*.css"],
						dest: "<%= dir.deploy %>/<%= dir.public %>/<%= dir.temp_styles %>/",
					}]
				},
			},
			
			//RESPONSIVE IMAGES TASK
				// myTask: {
				// 	options: {
				// 		engine: "im",
				// 		sizes: [{
				// 			name: 'large',
				// 			width: 640
				// 		}, {
				// 			name: "large2",
				// 			width: 1024,
				// 			suffix: "_x2",
				// 			quality: 60
				// 		}]
				// 	},
				// 	files: [{
				// 		expand: true,
				// 		cwd: '<%= dir.dev %>/',
				// 		src: ['**/<%= dir.images %>/**.{jpg,gif,png}'],
				// 		dest: '<%= dir.dev %>/'
				// 	}]
				// }
			// responsive_images: {
			// },
	
			//SASS PROCESS
			sass : {
				dev : {
					options : {
						trace 		: true,
						lineNumbers	: true,
						update		: true,
					},
					files : [{
						expand 	: true,
						cwd    	: "<%= dir.source %>/<%= dir.public %>/<%= dir.styles %>",
						src	 	: "*.scss",
						dest	: "<%= dir.dev %>/<%= dir.public %>/<%= dir.styles %>",
						ext		: ".css"
					}]
				},
				
				deploy: {
					options : {
						sourcemap	: "none",
					},
					files : [{
						expand 	: true,
						cwd    	: "<%= dir.source %>/<%= dir.public %>/<%= dir.styles %>",
						src	 	: "*.scss",
						dest	: "<%= dir.deploy %>/<%= dir.public %>/<%= dir.temp_styles %>",
						ext 	: ".css"
					}]
				}
			},
	
			// CONCAT PROCESS.
			// CURRENTLY THIS PROCESS WORKING ON SASS FILES WHEN THE DISERED BEHAVIOR IS TO BUNDLE ALL SASS FILES INTO AN UNIQUE CSS FILE. IT'S GONNA LOOK INTO A 'TEMP' FOLDER
			// AND OUTPUT A UNIQUE CSS FILE 
			concat :  {
				options : {
					sepator : ";",
				},
				css_single_file : {
					src : "<%= dir.deploy %>/<%= dir.public %>/<%= dir.temp_styles %>/**/*.css",
					dest: "<%= dir.deploy %>/<%= dir.public %>/<%= dir.temp_styles %>/app.css",
				}
			},
	
			//POST PROCESS
			postcss : {
				options : {
					// map : true,
					processors : [
						require('autoprefixer')({browsers: 'last 30 versions'}), // ADD VENDOR PREFIX FOR SOME CSS PROPS
						require('cssnano')(), 									 // MINIFY THE SINGLE FILE 
					]
				},
	
				dev: {
					files : [{
						src	: 	'<%= dir.dev %>/<%= dir.public %>/<%= dir.styles %>/**/*.css',
					}]
				},
	
				deploy_single_file: {
					src	: 	'<%= dir.deploy %>/<%= dir.public %>/<%= dir.temp_styles %>/app.css',
					dest: 	'<%= dir.deploy %>/<%= dir.public %>/<%= dir.styles %>/app.min.css',
				},
	
				deploy_multiple_files: {
					files : [{
						expand 	: true,
						flatten : true,
						cwd    	: "<%= dir.deploy %>/<%= dir.public %>",
						src	 	: "<%= dir.temp_styles %>/**/*.css",
						dest	: "<%= dir.deploy %>/<%= dir.public %>/<%= dir.styles %>",
						ext		: ".min.css"
					}]
				}
			},
	
			//JS PROCESS
			uglify : {
				options : {
					compress : true,
					beautify: false,
					drop_console: true,
					report : "min",
					sourcemap: true,
					mangle: {
						toplevel : true,	
					},
					banner : 	'/* <%= pkg.name %> --- <%= pkg.version %>' +
								'\n -- <%= grunt.template.today("dd/mm/yyyy") %> */'
				},
				dev : {
					options : {
						compress : false,
						beautify: true,
						drop_console: false,
						sourcemap: false,
						mangle: false,
						banner : '',
					},
					files : [{
						expand 	: true,
						cwd	   	: "<%= dir.source %>/<%= dir.public %>/<%= dir.js %>",
						src	   	: "**/*.js",
						dest	: "<%= dir.dev %>/<%= dir.public %>/<%= dir.js %>",
					}]
				},
				
				deploy_single_file : {
					files : {
						"<%= dir.deploy %>/<%= dir.public %>/<%= dir.js %>/app.js" : ["<%= dir.source %>/<%= dir.public %>/<%= dir.js %>/**/*.js"]
					}
				},
				deploy_multiple_files : {
					files : [{
						expand 	: true,
						cwd	   	: "<%= dir.source %>/<%= dir.public %>/<%= dir.js %>",
						src	   	: "**/*.js",
						dest	: "<%= dir.deploy %>/<%= dir.public %>/<%= dir.js %>",
					}]
				}
			},
	
			// WATCH PROCESS
			watch: {
				// WATCH - ADITION AND MOFIICATION PROCESS
				backEnd: {
				  files		: ["<%= dir.source %>/?(<%= dir.resources %>|<%= dir.tests %>)/**/*"],
				  tasks		: ["copy:backEnd"],
				  options	: {event: ["added","changed"]}
				},
	
				public_PHP_HTML: {
					files	: ["<%= dir.source %>/<%= dir.public %>/*.{php,html}"],
					tasks	: ["copy:public_PHP_HTML"],
					options	: { event: ["added", "changed"] }
				},
	
				sass : {
					files 	: ["<%= dir.source %>/<%= dir.public %>/**/*.scss"],
					tasks 	: [
						"sass:dev",
						"postcss:dev"
					],
					options	: {event: ["added","changed"]}
				},
				
				pureCSS: {
					files: ["<%= dir.source %>/public/**/*.css"],
					tasks: [
						'copy:pureCSS_dev',
						'postcss:dev'
				],
					options: {
					event: ["added", "changed"]
					}
				},
	
				js : {
					files 	: ["<%= dir.source %>/<%= dir.public %>/**/*.js"],
					tasks 	: ["newer:uglify:dev"],
					options	: {
						event : ['added','changed']
					}
				},
	
	
				// WATCH - DELETE PROCESS
				deleted_backEnd : {
					files : ["<%= dir.source %>/?(<%= dir.resources %>|<%= dir.tests %>)/**/*"],
					tasks : [
						"clean:backEnd",
						"copy:backEnd"
					],
					options : { event : "deleted"}
				},
	
				deleted_public_PHP_and_HTML: {
					files: ["<%= dir.source %>/<%= dir.public %>/*.{html,php}"],
					tasks: [
						"clean:public_PHP_HTML",
						"copy:public_PHP_HTML"
					],
					options: {event : ["deleted"]}
				},
	
				deleted_sass_and_css : {
					files 	: ["<%= dir.source %>/<%= dir.public %>/<%= dir.styles %>/*.{scss,css}"],
					tasks 	: [
						"clean:styles",
						"sass:dev",
						"copy:pureCSS_dev",
						"postcss:dev"
					],
					options : {event : ["deleted"]}
				},
	
				deleted_javascript : {
					files 	: ["<%= dir.source %>/<%= dir.public %>/**/*.js"],
					tasks 	: [
						"clean:js",
						"uglify:dev",
					],
					options	: {
						event : ['deleted']
					}
				},
			},
	
			//CLEAN PROCESS
			clean: {
				target 				: { "src" : "<%= dir.currTask %>/" },
				backEnd 			: { "src" : "<%= dir.dev %>/*(<%= dir.resources %>|<%= dir.tests %>)"},	
				public_PHP_HTML 	: { "src" : "<%= dir.dev %>/<%= dir.public %>/*.{php,html}"},
				sass 				: { "src" : "<%= dir.dev %>/<%= dir.public %>/<%= dir.styles %>/**/*.css"},	
				js 					: { "src" : "<%= dir.dev %>/<%= dir.public %>/<%= dir.js %>/**/*.js"},			
				temp_styles			: { "src" :	"<%= dir.deploy %>/<%= dir.public %>/<%= dir.temp_styles %>"}, // CLEAN ALL TEMPORARY CSS FILES ON 'DEPLOY MODE'
			},		
	
	
		});
	
	
		// LOAD TASKS
		grunt.loadNpmTasks("grunt-contrib-clean");
		grunt.loadNpmTasks("grunt-contrib-copy");
		grunt.loadNpmTasks("grunt-responsive-images");
		grunt.loadNpmTasks("grunt-contrib-sass");
		grunt.loadNpmTasks("grunt-postcss");
		grunt.loadNpmTasks("grunt-contrib-concat");
		grunt.loadNpmTasks("grunt-contrib-uglify");
		grunt.loadNpmTasks("grunt-contrib-watch");
		grunt.loadNpmTasks("grunt-newer");
	
	
	
		/*
		** DEV TASK SETUP
		*/
	
		grunt.registerTask("dev", [
			"clean:target",
			"copy:dev",
			"copy:pureCSS_dev",
			// "responsive_images",
			"sass:dev",
			"postcss:dev",
			"uglify:dev",
			"watch"
		]);
	
	
		/*
		** DEPLOY TASK SETUP
		*/
		var deployTask = [];
		
			deployTask.push(
				"clean:target",				// CLEAN ALL CONTENTS OF YOUR 'DEPLOY' FOLDER. WHICH NAME THIS 'DEPLOY' HAS IS DEFINED INSIDE A 'dir' OBJECT THAT'S INSIDE THE  initConfig({})
				"sass:deploy",
				"copy:pureCSS_deploy"	    
			);
	
			if(assets_mode === "single_file") deployTask.push("concat:css_single_file"); 		// IF YOU DESIRE TO GENERATE A UNIQUE CSS FILE, A 'CONCAT' TASK IS GONNA BE ADDED TO THE DEPLOY PROCESS. IT'S GONNA GENERATE A FILE LIKE "app.css", or "main.css" ETC...
			
			deployTask.push(
				"postcss:deploy_"+ assets_mode,
				"clean:temp_styles",
				"uglify:deploy_" + assets_mode
			);
			
		grunt.registerTask("deploy", deployTask); //REGISTER A DEPLOY TASK
		grunt.registerTask("default", "dev"); 	  //REGISTER A DEV TASK
	
	};
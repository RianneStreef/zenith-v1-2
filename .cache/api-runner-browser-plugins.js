module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":["G-CN0JQ68GS4"],"pluginConfig":{"head":true},"enableWebVitalsTracking":true,"respectDNT":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/Users/rianne/Desktop/Zenith/zenith-v1-2/src/components/Layout.jsx"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"icon":"src/images/favicon.ico","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"ac46415e82dba44d92b47c6a5990793b"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

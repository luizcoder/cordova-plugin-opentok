#!/usr/bin/env node

module.exports = function (context)
{
    var IosSDKVersion = 'OpenTok-iOS-2.8.3';
    var frameworkDir = context.opts.plugin.dir + '/src/ios';

	exec('tar -zxvf ./' + IosSDKVersion + '.tar.bz2', function (err, out, code)
	{
		console.log('expanded');
		exec('rm -r ' + frameworkDir + '/OpenTok.framework', function (err, out, code)
		{
			console.log('removed old framework');
			exec('mv ./' + IosSDKVersion + '/OpenTok.framework ' + frameworkDir, function (err, out, code)
			{
				console.log('moved OpenTok.framework into ' + frameworkDir);
				exec('rm -r ./' + IosSDKVersion, function (err, out, code)
				{
					console.log('Removed extracted dir');
					console.log('Finished');
				});
			});
		});
	});
};

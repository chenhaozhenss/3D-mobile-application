var spinning = false;
function spinCoke()
{
	spinning = !spinning;
	document.getElementById('modelCoke__coke-TIMER').setAttribute('enabled', spinning.toString());
}

function stopRotationCoke()
{
	spinning = false;
	document.getElementById('modelCoke__coke-TIMER').setAttribute('enabled', spinning.toString());
}

function animateModelcoke()
{
    if(document.getElementById('modelCoke__coke-TIMER').getAttribute('enabled')!= 'true')
        document.getElementById('modelCoke__coke-TIMER').setAttribute('enabled', 'true');
    else
        document.getElementById('modelCoke__coke-TIMER').setAttribute('enabled', 'false');
}

function spinPepper()
{
	spinning = !spinning;
	document.getElementById('modelPepper__drpepper-TIMER').setAttribute('enabled', spinning.toString());
}

function stopRotationPepper()
{
	spinning = false;
	document.getElementById('modelPepper__drpepper-TIMER').setAttribute('enabled', spinning.toString());
}

function animateModelPepper()
{
    if(document.getElementById('modelPepper__drpepper-TIMER').getAttribute('enabled')!= 'true')
        document.getElementById('modelPepper__drpepper-TIMER').setAttribute('enabled', 'true');
    else
        document.getElementById('modelPepper__drpepper-TIMER').setAttribute('enabled', 'false');
}

function spinSprite()
{
	spinning = !spinning;
	document.getElementById('modelSprite__Sprite-TIMER').setAttribute('enabled', spinning.toString());
}

function stopRotationSprite()
{
	spinning = false;
	document.getElementById('modelSprite__Sprite-TIMER').setAttribute('enabled', spinning.toString());
}

function animateModelSprite()
{
    if(document.getElementById('modelSprite__Sprite-TIMER').getAttribute('enabled')!= 'true')
        document.getElementById('modelSprite__Sprite-TIMER').setAttribute('enabled', 'true');
    else
        document.getElementById('modelSprite__Sprite-TIMER').setAttribute('enabled', 'false');
}
function wireframe()
{
	var e = document.getElementById('model');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

	var lightOn = true;

	function headlight()
	{
		lightOn = !lightOn;
		document.getElementById('model__headlight').setAttribute('headlight', lightOn.toString());
	}
	
	function cameraFrontCoke()
	{
		document.getElementById('modelCoke__CameraFront').setAttribute('bind', 'true');
	}
	function cameraFrontSprite()
	{
		document.getElementById('modelSprite__CameraFront').setAttribute('bind', 'true');
	}
	function cameraFrontPepper()
	{
		document.getElementById('modelPepper__CameraFront').setAttribute('bind', 'true');
	}
	
	function cameraBack()
	{
		document.getElementById('model__CameraBack').setAttribute('bind', 'true');
	}
	
	function cameraLeft()
	{
		document.getElementById('model__CameraLeft').setAttribute('bind', 'true');
	}
	
	function cameraRight()
	{
		document.getElementById('model__CameraRight').setAttribute('bind', 'true');
	}
	
	function cameraTopCoke()
	{
		document.getElementById('modelCoke__CameraTop').setAttribute('bind', 'true');
	}
	
	function cameraBottomCoke()
	{
		document.getElementById('modelCoke__CameraBottom').setAttribute('bind', 'true');
	}
	function cameraTopSprite()
	{
		document.getElementById('modelSprite__CameraTop').setAttribute('bind', 'true');
	}
	
	function cameraBottomSprite()
	{
		document.getElementById('modelSprite__CameraBottom').setAttribute('bind', 'true');
	}

	function cameraTopPepper()
	{
		document.getElementById('modelPepper__CameraTop').setAttribute('bind', 'true');
	}
	
	function cameraBottomPepper()
	{
		document.getElementById('modelPepper__CameraBottom').setAttribute('bind', 'true');
	}
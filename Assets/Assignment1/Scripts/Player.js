#pragma strict


var speed:int = 10;

renderer.material.color = Color.green;

function Update () 
{
	//player input
	if(Input.GetButton("UP"))
	{
		transform.Translate(Vector3(0,0,speed) * Time.deltaTime);
	}
	if(Input.GetButton("DOWN"))
	{
		transform.Translate(Vector3(0,0,-speed) * Time.deltaTime);
	}
	if(Input.GetKey("space"))
	{
		transform.Translate(Vector3(0,15,0)* Time.deltaTime);
	}
	if(Input.GetButton("LEFT"))
	{
		transform.Rotate(0,-3,0);
		//transform.Translate(Vector3(-speed,0,0) * Time.deltaTime);
	}
	if(Input.GetButton("RIGHT"))
	{
		transform.Rotate(0,3,0);
		//transform.Translate(Vector3(speed,0,0) * Time.deltaTime);
	}
}
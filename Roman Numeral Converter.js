var Level = function (i,v,x) {
	this.i=i;
	this.v=v;
	this.x=x;
};

var levels=[];
levels[0]=new Level('I','V','X');
levels[1]=new Level('X','L','C');
levels[2]=new Level('C','D','M');

function calcDigit(d,l){
	if(l>2){
		var str='';
		for(var m=1;m<=d*Math.pow(10,l- 3);m++)
			str+='M';
		return str;
	}
	else if(d==1)
		return levels[l].i;
	else if(d==2)
		return levels[l].i+ levels[l].i;
	else if(d==3)
		return levels[l].i+ levels[l].i+ levels[l].i;
	else if(d==4)
		return levels[l].i+ levels[l].v;
	else if(d==5)
		return levels[l].v;
	else if(d==6)
		return levels[l].v+ levels[l].i;
	else if(d==7)
		return levels[l].v+ levels[l].i+ levels[l].i;
	else if(d==8)
		return levels[l].v+ levels[l].i+ levels[l].i+ levels[l].i;
	else if(d==9)
		return levels[l].i+ levels[l].x;
	else return'';
}

function convert(n) {
	var r='';
	for(var c=0;c<n.length;c++)
		r+=calcDigit(n.charAt(c),n.length- c- 1);
	return r;
}

convert(35);

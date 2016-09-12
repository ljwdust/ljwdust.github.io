
var nums = new Array();
var j=0;
for (i = 1 ; i <= 152 ; i++) {
	if ( i>=39 && i<=50 ){
		continue;
	}
	else if (i == 18){
		continue;
	}
	else if (i == 35){
		continue;
	}
	else if (i == 52){
		continue;
	}
	else if (i == 53){
		continue;
	}
	else if (i == 55){
		continue;
	}
	else if (i == 56){
		continue;
	}
	else if (i == 58){
		continue;
	}
	else if (i == 59){
		continue;
	}
	else if (i == 60){
		continue;
	}
	else if (i == 72){
		continue;
	}
	else if (i == 74){
		continue;
	}
	else if (i == 78){
		continue;
	}
	else if (i == 79){
		continue;
	}
	else if (i == 80){
		continue;
	}
	else if (i == 85){
		continue;
	}
	else if (i == 97){
		continue;
	}
	else if (i == 99){
		continue;
	}
	else if (i == 100){
		continue;
	}
	else if (i == 101){
		continue;
	}
	else if (i == 102){
		continue;
	}
	else if (i == 107){
		continue;
	}
	else if (i == 108){
		continue;
	}
	else if (i == 111){
		continue;
	}
	else if (i == 112){
		continue;
	}
	else if (i == 113){
		continue;
	}
	else if (i == 115){
		continue;
	}
	else if (i == 116){
		continue;
	}
	else if (i == 118){
		continue;
	}
	else if (i == 121){
		continue;
	}
	else if (i == 122){
		continue;
	}
	else if (i == 123){
		continue;
	}
	else if (i == 124){
		continue;
	}
	else if (i == 127){
		continue;
	}
	else if (i == 128){
		continue;
	}
	else if (i == 130){
		continue;
	}
	else if (i == 131){
		continue;
	}
	else if (i == 132){
		continue;
	}
	else if (i == 135){
		continue;
	}
	else if (i == 136){
		continue;
	}
	else if (i == 137){
		continue;
	}
	else if (i == 139){
		continue;
	}
	else if (i == 143){
		continue;
	}
	else if (i == 145){
		continue;
	}		
	else if (i == 150){
		continue;
	}
	nums[j]=i;
	j++;
}
/*for (i = 0 ; i < nums.length ; i++) {
	if ( i>39 && i<=50 ){
		nums[i] = i+11;
	}
	else if (i == 35){
		continue;
	}
	else if (i == 39){
		continue;
	}
	else if (i == 52){
		continue;
	}
	else if (i == 53){
		continue;
	}
	else if (i == 55){
		continue;
	}
	else if (i == 56){
		continue;
	}
	else if (i == 58){
		continue;
	}
	else if (i == 59){
		continue;
	}
	else if (i == 60){
		continue;
	}
	else if (i == 72){
		continue;
	}
	else if (i == 74){
		continue;
	}
	else if (i == 78){
		continue;
	}
	else if (i == 79){
		continue;
	}
	else if (i == 80){
		continue;
	}
	else if (i == 85){
		continue;
	}
	else if (i == 97){
		continue;
	}
	else if (i == 102){
		continue;
	}
	else if (i == 128){
		continue;
	}
	else{
		nums[i] = i+1;
	}
	// 数组值不需要的，可依次加入下面的语句中
	if ( nums[i] == 35 ) nums[i]++;
	if ( nums[i] == 39 ) nums[i]++;
	if ( nums[i] == 52 ) nums[i]++;
	if ( nums[i] == 53 ) nums[i]++;
	if ( nums[i] == 55 ) nums[i]++;
	if ( nums[i] == 56 ) nums[i]++;
	if ( nums[i] == 58 ) nums[i]++;
	if ( nums[i] == 59 ) nums[i]++;
	if ( nums[i] == 60 ) nums[i]++;
	if ( nums[i] == 72 ) nums[i]++;
	if ( nums[i] == 74 ) nums[i]++;
	if ( nums[i] == 78 ) nums[i]++;
	if ( nums[i] == 79 ) nums[i]++;
	if ( nums[i] == 80 ) nums[i]++;
	if ( nums[i] == 85 ) nums[i]++;
	if ( nums[i] == 97 ) nums[i]++;
	if ( nums[i] == 102 ) nums[i]++;
	if ( nums[i] == 128 ) nums[i]++;
}*/

nums.sort(function() { return Math.random() - 0.5; });
nums = nums.slice(0, 20);
 
for (i = 0 ; i < nums.length ; i++) {
	document.write("<a class=\"imgbox\" href=\"member_detail.php?sid=" + (10000+nums[i]) + "\" target=\"_blank\"><img src=\"images/member/mp_" + (10000+nums[i]) + ".jpg\" border=\"0\" /></a>");
}
//感谢企鹅君
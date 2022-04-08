# Build CAT Commands
Implementing CAT commands using Node


Functionality -
<br>Format: node "name_of_file" -command_if_any filepath

i. using above format will view the contents of file, applicable for multiple files as well.
<br>ii. can be used for appending as well
<br>iii. Commands that can be used are :
	<br>'s' : to replace multiple line spaces to single line space
	<br>'n' : to apply numbering to all the lines including spaces
	<br>'b' : to apply numbering to all the lines excluding spaces i.e. only the ones which contain data

Tips -
<br>1> Use '\r\n' in split if you are using Windows.
<br>2> In case of any mutually exclusive commands like '-n -b' or '-b -s', the former will hold priority.
<br>3> '-s' will always come first while using combinations in commands since numbering first and removing those to give a single space is illogical.


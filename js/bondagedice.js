function GetOpponentAvatar (iOpponent, iOpponentPunishment) {
	switch (iOpponent) {
		case 1:
			if (iOpponentPunishment == 0) {
				return '<img src="media/bondage/bondagedice/opp1_av1.jpg">';
			}
			else if (iOpponentPunishment == 2) {
				return '<img src="media/bondage/bondagedice/opp1_av2.jpg">';
			}
			
		case 2:
			if (iOpponentPunishment == 0) {
				return '<img src="media/bondage/bondagedice/opp2_av1.jpg">';
			}
			else if (iOpponentPunishment == 2) {
				return '<img src="media/bondage/bondagedice/opp2_av2.jpg">';
			}
		case 3:
			if (iOpponentPunishment == 0) {
				return '<img src="media/bondage/bondagedice/opp3_av1.png">';
			}
			else if (iOpponentPunishment == 2) {
				return '<img src="media/bondage/bondagedice/opp3_av2.png">';
			}
			
		case 4:
			if (iOpponentPunishment == 0) {
				return '<img src="media/bondage/bondagedice/opp4_av1.jpg">';
			}
			else if (iOpponentPunishment == 2) {
				return '<img src="media/bondage/bondagedice/opp4_av2.jpg">';
			}
		case 5:
			if (iOpponentPunishment == 0) {
				return '<img src="media/bondage/bondagedice/opp5_av1.jpg">';
			}
			else if (iOpponentPunishment == 2) {
				return '<img src="media/bondage/bondagedice/opp5_av2.jpg">';
			}
	}
}

function GetOpponentName (iOpponent) {	
	switch (iOpponent) {
		case 1:
			return "Kira";
		case 2:
			return "Trina";
		case 3:
			return "Daria";
		case 4:
			return "Hadley";
		case 5:
			return "Jessie";
	}
}

function GetOpponentOpeningText (iOpponent) {	
	switch (iOpponent) {
		case 1:
			return "Let's roll, haha!";
		case 2:
			return "Let's hope you are more entertaining than the rest of these sluts around here.";
		case 3:
			return "Let's go!";
		case 4:
			return "Please, luck be on my side tonight! Let me win, for once...";
		case 5:
			return "//Moans// Y-yeah. Let's go...";
	}
}

function GetOpponentRoundStartText (iOpponent, iOpponentPunishment) {
	switch (iOpponent) {
		case 1:
			if (iOpponentPunishment < 2) {
				return "Let's make it count!";
			}
			else {
				return "Hmmhhf...";
			}
		case 2:
			if (iOpponentPunishment < 2) {
				return "I start. You will go down, girl.";
			}
			else {
				return "Hmmhhf...";
			}
		case 3:
			if (iOpponentPunishment < 2) {
				return "Roll away, little die.";
			}
			else {
				return "Hmmhhf...";
			}
		case 4:
			if (iOpponentPunishment < 2) {
				return "Ok, stay calm, it’s gonna be fine...";
			}
			else {
				return "Hmmhhf...";
			}
		case 5:
			if (iOpponentPunishment < 2) {
				return "//Moans heavily//";
			}
			else {
				return "Hmmhhf...";
			}
	}
}

function GetOpponentFirstPunishment (iOpponent, iOpponentPunishment) {
	var s;
	switch (iOpponent) {
		case 1:
			s = "Ropes appear from your opponents red cirlce and quickly slither around her ankels. With a sudden yank she is lifted up and place onto a stool that appeard out of nowehere inside the circle. Her left leg is pulled up by the rope that fastens itself onto the ceiling, pulling her leg up. The right is fixated onto the stool itself.\n\n";
			
			s += "<video class=\"centerBorderless\" autoplay loop muted onclick=\"source.ShowSource(667)\"><source src='media/bondage/bondagedice/opp1_pun1_1.mp4' type=\"video/mp4\"></video>";
			return s;
		case 2:
			return "<video class=\"centerBorderless\" autoplay loop muted onclick=\"source.ShowSource(663)\"><source src='media/bondage/bondagedice/opp2_pun1_1.mp4' type=\"video/mp4\"></video>";
		case 3:
			
			s = 'Driven by an invisible force, the glowing rope shoots out of the floor and coils around Daria\'s legs. A few moments later, the rope ties itself into a firm knot, rendering her unable to take the smallest step.\n\n';
			s += '<img class="centerBorderless" src="media/bondage/bondagedice/opp3_pun1_1.png" onclick="source.ShowSource(9998)">';
			
			return s;
		case 4:
			s = "A pedestal arises between her legs, pushing her upwards. She is left no choice but to straddle it.\n\n";
			s += "<video class=\"centerBorderless\" autoplay loop muted onclick=\"source.ShowSource(669)\"><source src='media/bondage/bondagedice/opp4_pun1_2.mp4' type=\"video/mp4\"></video>\n\n";
			s += "The straps fasten themselves around her ankle on one leg, the other strapping itself around her thigh and lower leg, forcing the limb into a folded position.\n\n";
			s += "<video class=\"centerBorderless\" autoplay loop muted onclick=\"source.ShowSource(669)\"><source src='media/bondage/bondagedice/opp4_pun1_1.mp4' type=\"video/mp4\"></video>\n\n";
			return s;
		case 5:
			s = "A pedestal arises between her legs, pushing her upwards. Her legs are forced apart. Quickly ropes slither around her thighs and pins them onto the pedestral.\n\n";
			s += "<video class=\"centerBorderless\" autoplay loop muted onclick=\"source.ShowSource(672)\"><source src='media/bondage/bondagedice/opp5_pun1_1.mp4' type=\"video/mp4\"></video>\n\n";
			return s;
	}
}

function GetOpponentFirstPunishmentText (iOpponent) {	
	switch (iOpponent) {
		case 1:
			return "Woah! I'm flexible but this is a stretch, hnn.";
		case 2:
			return "Ah shit. This rope is too tight. You got lucky!";
		case 3:
			return "Oh, that's tight!";
		case 4:
			return "Oh, man! Not again...";
		case 5:
			return "Oh, yes! That is so hot.";
	}
}

function GetOpponentSecondPunishment (iOpponent) {	
	var s;
	switch (iOpponent) {
		case 1:
			
			s = "From your opponents circle a big, red ballgag shoots up in the air and halts for a second right in front of her face before rushing forcefully insde her mouth and strapping itself tight behind her head.";
			
			s += "<video class=\"centerBorderless\" autoplay loop muted onclick=\"source.ShowSource(667)\"><source src='media/bondage/bondagedice/opp1_pun2_1.mp4' type=\"video/mp4\"></video>\n\n";
			
			s += "<<print dialog.Show1(\"anonfem.png\", \"Kira\", \"girls\", \"Hmmpf!\")>>";
			 
			return s;
		case 2:
			return "<video class=\"centerBorderless\" autoplay loop muted onclick=\"source.ShowSource(663)\"><source src='media/bondage/bondagedice/opp2_pun2_1.mp4' type=\"video/mp4\"></video>\n\n<<print dialog.Show1(\"anonfem.png\", \"Trina\", \"maids\", \"Hmmpf!\")>>\\\n\n<video class=\"centerBorderless\" autoplay loop muted onclick=\"source.ShowSource(663)\"><source src='media/bondage/bondagedice/opp2_pun2_2.mp4' type=\"video/mp4\"></video>\n\n";
		case 3:
			
			s = "All of a sudden, her mask loses its transparency as it turns into a firm, latex restraint which prevents Daria from uttering snarky comments... The shock on her face tells you that she is yet to get used to the sensation.\n\n";
			
			s += '<img class="centerBorderless" src="media/bondage/bondagedice/opp3_pun2_1.png" onclick="source.ShowSource(9998)">';
			 
			return s;
		case 4:
			
			s = "A bouncy ball shoots out from below her, hovering for a second in front of Hadley’s desperate face. Before she can even say something, the ball parts her mouth with unnatural force and swiftness, jamming itself between her plump lips. The straps, like limbs, coil themselves around her head, keeping the gag in its place.";
			
			s += "<video class=\"centerBorderless\" autoplay loop muted onclick=\"source.ShowSource(669)\"><source src='media/bondage/bondagedice/opp4_pun2_1.mp4' type=\"video/mp4\"></video>\n\n";
			
			s += "<<print dialog.Show1(\"anonfem.png\", \"Hadley\", \"girls\", \"Hmmph!\")>>";
			 
			return s;
		case 5:
			
			s = "This time nothing extraordinary seems to happen. Then a shadowly figure appears behind her, pushing skillfully a ballgag in her mouth. You can't really see who it is as only a silouhette is visible.";
			
			s += "<video class=\"centerBorderless\" autoplay loop muted onclick=\"source.ShowSource(672)\"><source src='media/bondage/bondagedice/opp5_pun2_1.mp4' type=\"video/mp4\"></video>\n\n";
			
			s += "Once the gag is fastened, the shadow figure disappears in the darkness again, as it never existed.\n\n";
			
			s += "<<print dialog.Show1(\"anonfem.png\", \"Jessie\", \"girls\", \"Hmm...\")>>";
			 
			return s;
	}
}

function GetOpponentThirdPunishment (iOpponent) {	
	var s;
	switch (iOpponent) {
		case 1:
			s = "More ropes appear from the circle and shoot upwards. This time on rope connects to the rope that pulls her leg up. The other end lies itself around her throat, pulling her head back.\n\nAnother couple of ropes place themselves around her wrists and pin them down onto the stool.\n\n";
			s += "<video class=\"centerBorderless\" autoplay loop muted onclick=\"source.ShowSource(667)\"><source src='media/bondage/bondagedice/opp1_pun3_1.mp4' type=\"video/mp4\"></video>";
			return s;
		case 2:
			return "<video class=\"centerBorderless\" autoplay loop muted onclick=\"source.ShowSource(663)\"><source src='media/bondage/bondagedice/opp2_pun3_1.mp4' type=\"video/mp4\"></video>\n\n<<print dialog.Show1(\"anonfem.png\", \"Trina\", \"maids\", \"MHMFPG...!\")>>\\\n\n";
		case 3:
			s = "he latex stretches over Daria's head, pushing the glasses off of her. The material seals itself around her neck with a thick, rubber collar. The contour of her lips reveals she is unable to part her mouth and utter anything more than a muffled moan.\n\n";
			
			s += '<img class="centerBorderless" src="media/bondage/bondagedice/opp3_pun3_1.png" onclick="source.ShowSource(9998)">\n\n';
			
			s += "You regard Daria from head to toe - she is completely bound. The mask keeps her expression intact and frozen, the glowing rope cutting into her supple, soft flesh.\n\n"
			
			s += '<img class="centerBorderless" src="media/bondage/bondagedice/opp3_pun3_2.png" onclick="source.ShowSource(9998)">\n\n';
			
			return s;
		case 4:
			s = "The glow of your opponent’s circle begins to radiate even more now that the last dice have fallen. A wooden plank appears behind her back, pulling her arms wide before it shoots belts to strap her against the surface, her arms apart and breasts heaving in nervousness.\n\n";
			s += "<video class=\"centerBorderless\" autoplay loop muted onclick=\"source.ShowSource(669)\"><source src='media/bondage/bondagedice/opp4_pun3_1.mp4' type=\"video/mp4\"></video>\n\n";
			s += "Any attempt to struggle is futile.\n\n";
			s += "<video class=\"centerBorderless\" autoplay loop muted onclick=\"source.ShowSource(669)\"><source src='media/bondage/bondagedice/opp4_pun3_2.mp4' type=\"video/mp4\"></video>";
			return s;
		case 5:
			s = "More ropes appear from the circle and shoot upwards. One rope slithers around her chest and forms to a complex shibari figure. Two more ropes race towards her wirsts and pull them apart, connecting them to columns on each side.\n\n";
			s += "<video class=\"centerBorderless\" autoplay loop muted onclick=\"source.ShowSource(672)\"><source src='media/bondage/bondagedice/opp5_pun3_1.mp4' type=\"video/mp4\"></video>\n\n";
			return s;
	}
}

function GetPlayerFirstPunishment (iOpponent, iOpponentPunishment) {
	var i = Math.floor(Math.random() * 4) + 1;
	switch (i) {
		case 1:
			return '<img class="center" src="media/bondage/bondagedice/pc_leg_1.jpg" onclick="source.ShowSource(9996)">';
		case 2:
			return '<img class="center" src="media/bondage/bondagedice/pc_leg_2.jpg" onclick="source.ShowSource(9996)">';
		case 3:
			return '<img class="center" src="media/bondage/bondagedice/pc_leg_3.jpg" onclick="source.ShowSource(9996)">';
		case 4:
			return '<img class="center" src="media/bondage/bondagedice/pc_leg_4.jpg" onclick="source.ShowSource(9996)">';
	}
}

function GetPlayerSecondPunishment (iOpponent, iOpponentPunishment) {
	var i = Math.floor(Math.random() * 11) + 1;
	switch (i) {
		case 1:
			return '<img class="center" src="media/bondage/bondagedice/pc_gag_1.jpg" onclick="source.ShowSource(664)">';
		case 2:
			return '<video class="centerBorderless" autoplay loop muted onclick="source.ShowSource(9996)"><source src="media/bondage/bondagedice/pc_gag_2.mp4" type="video/mp4"></video>';
		case 3:
			return '<img class="center" src="media/bondage/bondagedice/pc_gag_3.jpg" onclick="source.ShowSource(665)">';
		case 4:
			return '<video class="centerBorderless" autoplay loop muted onclick="source.ShowSource(666)"><source src="media/bondage/bondagedice/pc_gag_4.mp4" type="video/mp4"></video>';
		case 5:
			return '<video class="centerBorderless" autoplay loop muted onclick="source.ShowSource(9996)"><source src="media/bondage/bondagedice/pc_gag_5.mp4" type="video/mp4"></video>';
		case 6:
			return '<video class="centerBorderless" autoplay loop muted onclick="source.ShowSource(9996)"><source src="media/bondage/bondagedice/pc_gag_6.mp4" type="video/mp4"></video>';
		case 7:
			return '<video class="centerBorderless" autoplay loop muted onclick="source.ShowSource(9996)"><source src="media/bondage/bondagedice/pc_gag_7.mp4" type="video/mp4"></video>';
		case 8:
			return '<img class="center" src="media/bondage/bondagedice/pc_gag_8.jpg" onclick="source.ShowSource(9996)">';
		case 9:
			return '<img class="center" src="media/bondage/bondagedice/pc_gag_9.jpg" onclick="source.ShowSource(9996)">';
		case 10:
			return '<video class="centerBorderless" autoplay loop muted onclick="source.ShowSource(9996)"><source src="media/bondage/bondagedice/pc_gag_10.mp4" type="video/mp4"></video>';
		case 11:
			return '<video class="centerBorderless" autoplay loop muted onclick="source.ShowSource(676)"><source src="media/bondage/bondagedice/pc_gag_11.mp4" type="video/mp4"></video>';
	}
}

function GetPlayerThirdPunishment (iOpponent, iOpponentPunishment) {
	var i = Math.floor(Math.random() * 10) + 1;
	switch (i) {
		case 1:
			return '<video class="centerBorderless" autoplay loop muted onclick="source.ShowSource(668)"><source src="media/bondage/bondagedice/pc_full_1.mp4" type="video/mp4"></video>';
		case 2:
			return '<img class="center" src="media/bondage/bondagedice/pc_full_2.jpg" onclick="source.ShowSource(673)">';
		case 3:
			return '<video class="centerBorderless" autoplay loop muted onclick="source.ShowSource(674)"><source src="media/bondage/bondagedice/pc_full_3.mp4" type="video/mp4"></video>';
		case 4:
			return '<img class="center" src="media/bondage/bondagedice/pc_full_4.jpg" onclick="source.ShowSource(9996)">';
		case 5:
			return '<img class="center" src="media/bondage/bondagedice/pc_full_5.jpg" onclick="source.ShowSource(9996)">';
		case 6:
			return '<video class="centerBorderless" autoplay loop muted onclick="source.ShowSource(9996)"><source src="media/bondage/bondagedice/pc_full_6.mp4" type="video/mp4"></video>';
		case 7:
			return '<img class="center" src="media/bondage/bondagedice/pc_full_7.jpg" onclick="source.ShowSource(9996)">';
		case 8:
			return '<img class="center" src="media/bondage/bondagedice/pc_full_8.jpg" onclick="source.ShowSource(9996)">';
		case 9:
			return '<img class="center" src="media/bondage/bondagedice/pc_full_9.jpg" onclick="source.ShowSource(9996)">';
		case 10:
			return '<img class="center" src="media/bondage/bondagedice/pc_full_10.jpg" onclick="source.ShowSource(9996)">';
	}
}
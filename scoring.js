$(document).ready(function() {
	let average = 0;

	function getValue() {
		let subject_points = [
			Number($('#national_language').val()),
			Number($('#english').val()),
			Number($('#mathematics').val()),
			Number($('#science').val()),
			Number($('#society').val())
		];
		return subject_points;
	}

	function score_indicate() {
		let subject_points = [
			Number($('#national_language').val()),
			Number($('#english').val()),
			Number($('#mathematics').val()),
			Number($('#science').val()),
			Number($('#society').val())
		];

		let sum = subject_points[0];
		sum = sum + subject_points[1];
		sum = sum + subject_points[2];
		sum = sum + subject_points[3];
		sum = sum + subject_points[4];
		average = sum / 5;
		$('#sum_indicate').text(sum);
		$('#avarage_indicate').text(average);
	}

	function get_achievement() {
		if (average >= 80) {
			return 'A';
		} else if (average >= 60 && average < 80) {
			return 'B';
		} else if (average >= 40 && average < 60) {
			return 'C';
		} else {
			return 'D';
		}
	}

	function get_pass_or_failure() {
		let subjects = getValue();
		let judge = 'Passed';
		for (let i = 0; i < subjects.length; i++) {
			if (subjects[i] < 60) {
				judge = 'Failed';
			}
		}
		return judge;
	}

	function judgement() {
		let grade = get_achievement();
		let judge = get_pass_or_failure();
		$('#declaration').text(`Your grade is ${grade}. ${judge}`);
		// $('#declaration').text(`<label id="alert-indicate" class="alert alert-info">Your grade is ${grade}. ${judge}</label>`);
	}

	$('#national_language, #english, #mathematics, #science, #society').change(function() {
		score_indicate();
	});

	$('#btn-evaluation').click(function() {
		$('#evaluation').text(get_achievement());
	});

	$('#btn-judge').click(function() {
		$('#judge').text(get_pass_or_failure());
	});

	$('#btn-declaration').click(function() {
		$('#declaration').text(judgement());
	});
});

import React from 'react';
import axios from 'axios';


export class ImageUpload extends React.Component {

	constructor(props){
		super(props);
		this.form=null;
		this.formSubmitHandler = this.formSubmitHandler.bind(this);
	}

	formSubmitHandler(evt) {
		evt.preventDefault();
		
		var data = new FormData(document.querySelector("form"));

		data.append("file", this.form.sampleFile);

		axios.post("http://localhost:8000/formSubmit", data, { headers: { 'Content-Type': 'multipart/form-data' }
		})
        .then(function (res) {
        })
        .catch(function (err) {
        });
	}

	render() {
		return (
			<div>
				<form onSubmit={this.formSubmitHandler} ref={el=>this.form=el}>
					<input type="text" name="fileName" placeholder="testValue" />
					<br/>
					<br/>
					<input type="file" name="sampleFile"  />
					<br/>
					<br/>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}

}
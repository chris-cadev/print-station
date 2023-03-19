<script lang="ts">
	import { writable } from 'svelte/store';

	interface File {
		id: number;
		name: string;
	}
	const files = [
		{ id: 1, name: 'file1.txt', preview: 'preview1.jpg' },
		{ id: 2, name: 'file2.txt', preview: 'preview2.jpg' },
		{ id: 3, name: 'file3.txt', preview: 'preview3.jpg' },
		{ id: 4, name: 'file4.txt', preview: 'preview4.jpg' }
	];

	const selectedFiles = writable<File[]>([]);

	function handleCheckboxChange(event: any, file: File) {
		if (event.target.checked) {
			selectedFiles.update((files) => [...files, file]);
		} else {
			selectedFiles.update((files) => files.filter((f) => f.id !== file.id));
		}
	}
</script>

<div class="mosaic">
	{#each files as file}
		<div class="file">
			<div class="checkbox-container">
				<input type="checkbox" on:change={(event) => handleCheckboxChange(event, file)} />
			</div>
			<div class="preview-container">
				<img src={file.preview} alt="File preview" />
			</div>
			<div class="name-container">
				<p>{file.name}</p>
			</div>
		</div>
	{/each}
</div>

<p>Selected files: {JSON.stringify($selectedFiles)}</p>

<style>
	.mosaic {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-gap: 10px;
	}

	.file {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 10px;
	}

	.checkbox-container {
		margin-bottom: 10px;
	}

	.preview-container {
		width: 100%;
		height: 150px;
		margin-bottom: 10px;
		overflow: hidden;
	}

	.preview-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.name-container {
		text-align: center;
	}
</style>

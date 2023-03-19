<script lang="ts">
	import { writable } from 'svelte/store';

	interface File {
		id: number;
		name: string;
	}

	const files = [
		{ id: 1, name: 'file1.txt' },
		{ id: 2, name: 'file2.txt' },
		{ id: 3, name: 'file3.txt' },
		{ id: 4, name: 'file4.txt' }
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

<table>
	<thead>
		<tr>
			<th />
			<th>File Name</th>
		</tr>
	</thead>
	<tbody>
		{#each files as file}
			<tr>
				<td>
					<input type="checkbox" on:change={(event) => handleCheckboxChange(event, file)} />
				</td>
				<td>{file.name}</td>
			</tr>
		{/each}
	</tbody>
</table>

<p>Selected files: {JSON.stringify($selectedFiles)}</p>

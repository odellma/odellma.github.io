<script lang="ts">
	let { rows = [] } = $props();
</script>

<div class="overflow-x-auto">
	<table class="w-full border-collapse">
		<tbody>
			{#each rows as row}
				<tr class="hover:bg-slate-800/50">
					{#each row as cell}
						<td class="border-b border-slate-800 px-4 py-3">
							{cell}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
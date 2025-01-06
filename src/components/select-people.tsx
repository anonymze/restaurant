import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select";


export function SelectPeople() {
	return (
		<Select>
			<SelectTrigger className="w-full pl-12 rounded-none">
				<SelectValue placeholder="Sélectionnez combien vous êtes" />
			</SelectTrigger>
			<SelectContent className="bg-white rounded-none">
				<SelectItem className="hover:bg-primary hover:text-white" value="1">1 personne</SelectItem>
				<SelectItem className="hover:bg-primary hover:text-white" value="2">2 personnes</SelectItem>
				<SelectItem className="hover:bg-primary hover:text-white" value="3">3 personnes</SelectItem>
				<SelectItem className="hover:bg-primary hover:text-white" value="4">4 personnes</SelectItem>
				<SelectItem className="hover:bg-primary hover:text-white" value="5">5 personnes</SelectItem>
				<SelectItem className="hover:bg-primary hover:text-white" value="6">6 personnes</SelectItem>
			</SelectContent>
		</Select>
	);
}
